const Base = require('../Base')

class Duel extends Base {

    constructor(message, user) {
        super(message, user)

        this.typeDuel = 'random'
        this.trainers = require('../../Personaje')

        this.generate = async (user, config) => {
            const data = {  }
            const person = this.randomTrainer(user.trainer.region)
            const pokemon = this.pokemon.get(person.pokemon[Math.floor(Math.random() * person.pokemon.length)])

            data.trainer = {
                id: null,
                user: config.user,
                name: person.nombre,
                region: person.region,
                bracelet: null,
                register: new Date(),
            }
            data.pokemon = {
                id: null,
                form: pokemon.pokemon,
                pokemon: pokemon.pokemon,
                name: pokemon.pokemon,
                ball: 'Poke Ball',
                shiny: false,
                gender: pokemon.randomGender(),
                nature: pokemon.getNature(),
                xp: 0,
                level: user.pokemon.level,
                life: 100,
                friendship: pokemon.amistad,
                object: null,
            }
            data.config = {
                rival: config.rival,
                start: true,
                startDuel: Date.now(),
                typeDuel: this.typeDuel,
                match: config.match,
                usedMoveZ: false,
                usedObjects: 0,
                usedBerries: 0,
                leave: 0,
            }
            data.turn = {
                latest: Date.now(),
                move: null,
                move_z: false,
            }
            data.pe = {  }
            data.iv = {  }
            data.powerExtra = {  }
            data.power = {
                evasion: 0,
                precision: 0,
            }

            const stats = pokemon.generateStats()
            for(let i = 0; i < this.stat.length; i++) {
                data.pe[this.stat[i]] = 0
                data.iv[this.stat[i]] = stats[i]
                data.powerExtra[this.stat[i]] = 0
                data.power[this.stat[i]] = pokemon.calculateStat(data.pokemon.level, data.iv[this.stat[i]], data.pe[this.stat[i]], data.pokemon.nature, this.stat[i])
            }
            data.iv.iv = stats[6]
            data.power.hpTotal = data.power.hp

            data.gigamax = {
                is: null,
                level: user.gigamax.level,
            }
            data.place = {
                guild: user.place.guild,
                channel: user.place.channel,
            }

            data.moves = [  ]
            pokemon.movimientos.map(e => {
                if(e[1] <= data.pokemon.level) data.moves.push(e[0].nombre)
            })
            if(data.moves.length == 0) data.moves.push('Placaje')

            const folder = new this.megadb.crearDB(data.trainer.user, 'duel/')
            folder.establecer('data', data)

            return data
        }

        this.randomTrainer = region => {
            if(region == null) region = 'Kanto'
            const trainers = this.trainers
            // const trainers = []
            // this.trainers.map(e => {
            //     if(e.region.toLowerCase() == region.toLowerCase()) trainers.push(e)
            // })
            // if(trainers.length == 0) trainers.push(this.trainers[0])
            return trainers[Math.floor(Math.random() * trainers.length)]
        }

        this.leave = async user => {
            const elapsed = Math.round((Date.now() - user.config.startDuel) / 1000)
            const lack = 30 - elapsed

            if(lack > 0) return this.message.reply('aún debes esperar ' + lack + ' segundos para poder salir de tu combate actual.')

            this.delete(user.config.rival)
            return this.message.reply('he dado por finalizado tu duelo.')
        }

        this.reward = async (win, loss) => {
            let msg = 'Ninguno de los dos pokémon pueden continuar, el duelo ha terminado en empate.'

            if(win != null) {
                msg = '¡' + win.trainer.name + ' y ' + win.pokemon.form + ' han ganado el combate!'

                if(win.trainer.user == this.user) {
                    const winPokemon = this.pokemon.get(win.pokemon.form)

                    if(win.pokemon.level < 200) {
                        const getExp = winPokemon.getExp(win.pokemon.level, loss.pokemon.level, this.pokemon.get(loss.pokemon.form).stats.hp)
                        const needExp = winPokemon.needExp(win.pokemon.level)
                        
                        win.pokemon.xp += getExp
                        msg += '\n' + win.pokemon.form + ' ha ganado ' + getExp + ' puntos de experiencia.'

                        if(win.pokemon.xp >= needExp) {
                            win.pokemon.level++
                            win.pokemon.xp -= needExp
                            msg += '\n' + win.pokemon.form + ' ha subido al nivel ' + win.pokemon.level + '.'
                        }
                        if(win.power.hp != win.power.hpTotal) {
                            win.pokemon.life -= 1
                            if(win.pokemon.life < 0) win.pokemon.life = 0
                        }
                    }

                    const evolve = winPokemon.getEvolveLevel(win.pokemon.level, win.pokemon.gender)
                    if(evolve) {
                        if(win.pokemon.name == win.pokemon.form) win.pokemon.name = evolve
                        msg += '\n' + win.pokemon.form + ' ha evolucionado en ' + evolve + '.'
                        win.pokemon.form = evolve
                    }

                    await this.db.pokemon.update({ pokemon: win.pokemon.form, name: win.pokemon.name, xp: win.pokemon.xp, level: win.pokemon.level, life: win.pokemon.life }, { where: { id: win.pokemon.id } })
                }
                else {
                    win.pokemon.life -= 3
                    if(win.pokemon.life < 0) win.pokemon.life = 0
                    await this.db.pokemon.update({ life: win.pokemon.life }, { where: { id: loss.pokemon.id } })
                }
            }
            
            return msg
        }
    }

}

module.exports = Duel