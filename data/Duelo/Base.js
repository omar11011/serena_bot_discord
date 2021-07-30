const exec = require('child_process').exec

class Duel {

    constructor(message, user) {
        this.user = user
        this.message = message

        this.typeDuel = 'base'
        this.automatic = {
            leave: { use: true, anyGuild: true, anyChannel: true },
            move: { use: true, anyGuild: true, anyChannel: true },
            mega: { use: true, anyGuild: true, anyChannel: true },
            gigamax: { use: true, anyGuild: true, anyChannel: true },
            temporal: { use: true, anyGuild: true, anyChannel: true },
        }
        this.stat = ['hp', 'attack', 'defense', 'spattack', 'spdefense', 'speed']

        this.megadb = require('megadb')
        this.folder = new this.megadb.crearDB(this.user, 'duel/')

        this.db = require('../../server/models')
        this.pokemon = require('../../util/Pokemon')
        this.movement = require('../../util/Movement')
        this.sendEmbed = require('../../util/functions/sendEmbed')

        this.get = async () => {
            const data = await this.folder.obtener('data')
            return data
        }

        this.delete = ids => {
            if(!ids) ids = [this.user]
            else {
                if(!Array.isArray(ids)) ids = [ids]
            }
            if(!ids.includes(this.user)) ids.push(this.user)

            for(let i = 0; i < ids.length; i++) {
                const folder = new this.megadb.crearDB(ids[i], 'duel/')
                folder.eliminar('data')
                exec('rm app/mega_databases/duel/' + ids[i] + '.json', async (err, stdout, stderr) => {
                    if(err) return console.log(err)
                })
            }
        }

        this.create = async config => {
            const result = { error: true }
            const inDuel = await this.get()
            if(inDuel) {
                this.message.reply('actualmente tienes un duelo pendiente.')
                return result
            }

            const data = {  }
            const pokemon = await this.db.pokemon.findOne({ where: { select: true }, include: [ { model: this.db.trainer, as: 'trainer', where: { user: this.user } } ] })
            if(!pokemon || pokemon.moves == null) {
                if(!pokemon) this.message.reply('no tienes ningún pokémon seleccionado.')
                if(pokemon && pokemon.moves == null) this.message.reply('tu pokémon no ha aprendido ningún movimiento.')
                return result
            }

            data.trainer = {
                id: pokemon.trainer.id,
                user: pokemon.trainer.user,
                name: pokemon.trainer.name,
                region: pokemon.trainer.region,
                bracelet: pokemon.trainer.bracelet,
                register: pokemon.trainer.date,
            }
            data.pokemon = {
                id: pokemon.id,
                form: pokemon.pokemon,
                pokemon: pokemon.pokemon,
                name: pokemon.name,
                ball: pokemon.ball,
                shiny: pokemon.shiny,
                gender: pokemon.gender,
                nature: pokemon.nature,
                xp: pokemon.xp,
                level: pokemon.level,
                life: pokemon.life,
                friendship: pokemon.friendship,
                object: pokemon.object,
            }

            data.config = {
                rival: config.rival,
                start: false,
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
            
            if(data.config.match) {
                if(isNaN(config.level) || parseInt(config.level) < 0 || parseInt(config.level) > 200) {
                    this.message.reply('debes introducir un nivel válido para emparejar el duelo.')
                    return result
                }
                data.pokemon.level = parseInt(config.level)
            }

            const form = this.pokemon.get(data.pokemon.pokemon)
            data.pe = {  }
            data.powerExtra = {  }
            data.power = {
                evasion: 0,
                precision: 0,
            }
            data.iv = { iv: Number(pokemon.iv) }

            for(let i = 0; i < this.stat.length; i++) {
                data.iv[this.stat[i]] = pokemon[this.stat[i]]
                data.pe[this.stat[i]] = pokemon[this.stat[i] + '_pe']
                data.power[this.stat[i]] = form.calculateStat(data.pokemon.level, data.iv[this.stat[i]], data.pe[this.stat[i]], data.pokemon.nature, this.stat[i])
                data.powerExtra[this.stat[i]] = 0
            }

            data.power.hpTotal = data.power.hp
            data.power.hp = Math.round(data.power.hp * (data.pokemon.life / 100).toFixed(2))
            if(data.power.hp <= 0) {
                this.message.reply('tu pokémon se encuentra muy cansado.')
                return result
            }

            data.gigamax = {
                is: pokemon.gigamax,
                level: pokemon.dynamax,
            }
            data.moves = pokemon.moves.split(',')
            data.place = {
                guild: message.guild.id,
                channel: message.channel.id,
            }
            
            this.folder.establecer('data', data)

            result.error = false
            result.data = data

            return result
        }

        this.start = data => {
            data.config.start = true
            this.folder.establecer('data', data)
        }

        this.mega = async data => {
            const result = { error: true, has: false, form: [] }
            if(data.pokemon.object == null && !isNaN(data.trainer.user)) {
                result.message = 'tu pokémon no tiene equipada ninguna megapiedra.'
                return result
            }

            const pokemon = this.pokemon.get(data.pokemon.pokemon)
            pokemon.evolucion.map(e => {
                if(e.tipo == 'Mega' && (isNaN(data.trainer.user) || (!isNaN(data.trainer.user) && e.item.nombre == data.pokemon.object))) result.has = true, result.form.push(e.evolucion)
            })

            if(!result.has) {
                result.message = 'tu pokémon no tiene megaevolución o no puede megaevolucionar con el objeto que lleva equipado.'
                return result
            }
            
            const form = this.pokemon.get(result.form[Math.floor(Math.random() * result.form.length)])
            const difference = data.power.hpTotal - data.power.hp

            for(let i = 0; i < this.stat.length; i++) {
                data.power[this.stat[i]] = form.calculateStat(data.pokemon.level, data.iv[this.stat[i]], data.pe[this.stat[i]], data.pokemon.nature, this.stat[i])
            }

            data.pokemon.pokemon = form.pokemon
            data.power.hpTotal = data.power.hp
            data.power.hp -= difference

            result.error = false
            result.message = 'tu pokémon ha megaevolucionado en ' + data.pokemon.pokemon + '.'
            this.folder.establecer('data', data)
           
            return result
        }

        this.gigamax = async data => {
            const result = { error: true, has: false, form: null }
            const form = this.pokemon.get(data.pokemon.pokemon)

            form.evolucion.map(e => {
                if(e.tipo == 'Gigamax') result.has = true, result.form = e.evolucion
            })

            if(!result.has) {
                result.message = data.pokemon.pokemon + ' no posee ninguna forma gigamax.'
                return result
            }

            if(data.gigamax.is == null) {
                let is = false
                let random = Math.round(Math.random() * 100)
                if(random <= data.iv.iv) is = true
                if(!isNaN(data.trainer.user)) await this.db.pokemon.update({ gigamax: is }, { where: { id: data.pokemon.id } })
                data.gigamax.is = is
            }
            if(!data.gigamax.is) {
                result.message = 'tu pokémon no posee el factor gigamax.'
                return result
            }

            const gigamax = this.pokemon.get(result.form)
            const difference = data.power.hpTotal - data.power.hp

            data.pokemon.pokemon = gigamax.pokemon
            data.power.hpTotal = Math.round(data.power.hpTotal * (1.5 + (0.05 * data.gigamax.level)))
            data.power.hp = data.power.hpTotal - difference
            data.moves = []

            gigamax.movimientos.map(e => {
                data.moves.push(e[0].nombre)
            })
            if(data.turn.move != null && !data.moves[data.turn.move]) {
                data.turn.move = data.moves[Math.floor(Math.random() * data.moves.length)]
                data.turn.move_z = false
            }

            this.folder.establecer('data', data)

            result.error = false
            result.message = 'tu pokémon se ha convertido en ' + data.pokemon.pokemon + '.'

            return result
        }

        this.temporal = async data => {
            const result = { error: true, has: false, form: [] }
            const pokemon = this.pokemon.get(data.pokemon.pokemon)

            pokemon.evolucion.map(e => {
                if(e.tipo == 'Temporal' && data.pokemon.level >= e.level) {
                    if(!e.item) result.form.push(e.evolucion)
                    else {
                        if(isNaN(data.trainer.user)) data.pokemon.object = e.item.nombre
                        if(e.item.nombre == data.pokemon.object) result.form.push(e.evolucion)
                    }
                }
            })

            if(result.form.length == 0) {
                result.message = 'tu pokémon no posee ninguna evolución temporal, no tiene el nivel necesario o no porta el objeto requerido.'
                return result
            }

            const form = this.pokemon.get(result.form[Math.floor(Math.random() * result.form.length)])
            const difference = data.power.hpTotal - data.power.hp

            for(let i = 0; i < this.stat.length; i++) {
                data.power[this.stat[i]] = form.calculateStat(data.pokemon.level, data.iv[this.stat[i]], data.pe[this.stat[i]], data.pokemon.nature, this.stat[i])
            }

            data.pokemon.pokemon = form.pokemon
            data.power.hpTotal = data.power.hp
            data.power.hp -= difference

            result.error = false
            result.message = 'tu pokémon se ha convertido en ' + data.pokemon.pokemon + '.'
            this.folder.establecer('data', data)

            return result
        }

        this.move = async (user, rival, obj) => {
            if(rival.turn.move == null && user.turn.move == null) {
                user.turn.move = user.moves[obj.number]
                user.turn.move_z = obj.z
                user.turn.latest = Date.now()
                this.message.react('☑️')
                return this.folder.establecer('data', user)
            }
            else if(rival.turn.move == null && user.turn.move != null) {
                const elapsed = Math.round((Date.now() - user.turn.latest) / 1000)
                const lack = 15 - elapsed
                if(lack > 0) return this.message.react('⌛')
            }
            else if(rival.turn.move != null && user.turn.move == null) {
                user.turn.move = user.moves[obj.number]
                user.turn.move_z = obj.z
                this.message.react('☑️')
            }
            
            if(user.turn.move_z && (user.config.usedMoveZ || user.pokemon.pokemon.split(" ").includes('Gigamax'))) user.turn.move_z = false
            if(rival.turn.move_z && (rival.config.usedMoveZ || rival.pokemon.pokemon.split(" ").includes('Gigamax'))) rival.turn.move_z = false
            
            const damage = { user: 0, rival: 0 }

            // Usuario
            const userMove = this.movement.get(user.turn.move)
            const userPokemon = this.pokemon.get(user.pokemon.pokemon)
            const rivalPokemon = this.pokemon.get(rival.pokemon.pokemon)

            if(user.turn.move_z && user.trainer.bracelet != userMove.move_z.nombre) user.turn.move_z = false
            if(user.turn.move_z && !user.config.usedMoveZ) user.config.usedMoveZ = true

            if(Math.floor(Math.random() * 100) <= (userMove.precision + user.power.precision - rival.power.evasion) || user.turn.move_z) {
                damage.user = userMove.damage(!user.turn.move_z ? userMove.potencia : userMove.move_z.potencia(userMove.potencia), user.pokemon.level, userMove.categoria == 'Físico' ? (user.power.attack + user.powerExtra.attack) : (user.power.spattack + user.powerExtra.spattack), userMove.categoria == 'Físico' ? (rival.power.defense + rival.powerExtra.defense) : (rival.power.spdefense + rival.powerExtra.spdefense), rivalPokemon.debilidad(userMove.tipo.nombre))
            }

            // Rival
            if(rival.turn.move != null) {
                var rivalMove = this.movement.get(rival.turn.move)

                if(rival.turn.move_z && rival.trainer.bracelet != rivalMove.move_z.nombre) rival.turn.move_z = false
                if(rival.turn.move_z && !rival.config.usedMoveZ) rival.config.usedMoveZ = true
                
                if(Math.floor(Math.random() * 100) <= (rivalMove.precision + rival.power.precision - user.power.evasion) || rival.turn.move_z) {
                    damage.rival = rivalMove.damage(!rival.turn.move_z ? rivalMove.potencia : rivalMove.move_z.potencia(rivalMove.potencia), rival.pokemon.level, rivalMove.categoria == 'Físico' ? (rival.power.attack + rival.powerExtra.attack) : (rival.power.spattack + rival.powerExtra.spattack), rivalMove.categoria == 'Físico' ? (user.power.defense + user.powerExtra.defense) : (user.power.spdefense + user.powerExtra.spdefense), userPokemon.debilidad(rivalMove.tipo.nombre))
                }
            }
            
            user.power.hp -= damage.rival
            rival.power.hp -= damage.user

            const result = { win: null, loss: null }

            if(user.power.hp <= 0 && rival.power.hp <= 0) {
                if(user.power.speed + user.powerExtra.speed == rival.power.speed + rival.powerExtra.speed) {
                    user.power.hp = 0
                    rival.power.hp = 0
                } else {
                    if(user.power.speed + user.powerExtra.speed > rival.power.speed + rival.powerExtra.speed) {
                        user.power.hp += damage.rival
                        rival.power.hp = 0
                    } else {
                        user.power.hp = 0
                        rival.power.hp += damage.user
                    }
                }
            }

            if(user.power.hp <= 0 && rival.power.hp > 0) {
                result.win = rival
                result.loss = user
                user.power.hp = 0
            }
            else if(user.power.hp > 0 && rival.power.hp <= 0) {
                result.win = user
                result.loss = rival
                rival.power.hp = 0
            }

            if(user.power.hp < 0) user.power.hp = 0
            if(rival.power.hp < 0) rival.power.hp = 0

            const embed = {
                color: '#16A167',
                author: '🏆 ' + user.trainer.name + ' vs ' + rival.trainer.name,
                fields: [
                    { name: user.pokemon.pokemon, value: '```• Movimiento: ' + (user.turn.move_z ? userMove.move_z.movimiento : userMove.nombre) + '\n• Daño causado: ' + damage.user + '\n• Salud: ' + user.power.hp + '/' + user.power.hpTotal + '```' },
                    { name: rival.pokemon.pokemon, value: '```• Movimiento: ' + (rival.turn.move == null ? 'Ninguno' : (rival.turn.move_z ? rivalMove.move_z.movimiento : rivalMove.nombre)) + '\n• Daño causado: ' + damage.rival + '\n• Salud: ' + rival.power.hp + '/' + rival.power.hpTotal + '```' },
                ],
                footer: 'Recuerda que pueden adelantar turno pasando los 15 segundos de inactividad durante el combate.'
            }

            if(user.power.hp > 0 && rival.power.hp > 0) {
                user.turn.move = null
                user.turn.move_z = false
                this.folder.establecer('data', user)

                const folder = new this.megadb.crearDB(user.config.rival, 'duel/')
                rival.turn.move = null
                rival.turn.move_z = false
                folder.establecer('data', rival)

                return this.sendEmbed(this.message, embed)
            }
            
            try {
                this.delete(user.config.rival)
            } catch {
                console.log('No pude eliminar los JSON del duelo entre los entrenadores: ' + user.trainer.name + ' y ' + rival.trainer.name)
            }

            embed.description = await this.reward(result.win, result.loss)

            return this.sendEmbed(this.message, embed)
        }

        this.duelStart = (user, rival) => {
            const embed = {
                color: '#16A167',
                author: '🏆 COMBATE POKÉMON',
                description: 'El duelo entre ' + user.trainer.name + ' y ' + rival.trainer.name + ' está a punto de comenzar. Cualquier bug que pueda ocurrir durante el desarrollo del combate por favor comunicarlo al equipo, ¡mucha suerte a ambos y que gane el mejor!',
                fields: [
                    { name: user.trainer.name, value: 'Región: ' + user.trainer.region + '\nPokémon: ' + user.pokemon.form + '\nNivel: ' + user.pokemon.level + '\nSalud: ' + user.power.hp + '/' + user.power.hpTotal, inline: true },
                    { name: rival.trainer.name, value: '\nRegión: ' + rival.trainer.region + '\nPokémon: ' + rival.pokemon.form + '\nNivel: ' + rival.pokemon.level + '\nSalud: ' + rival.power.hp + '/' + rival.power.hpTotal, inline: true },
                ],
                footer: 'En caso que sea un combate de liga no olviden que esta debe ser supervisada por un miembro del Alto Mando.'
            }

            return this.sendEmbed(this.message, embed)
        }

        this.moveRival = async (data, config) => {
            if(data.turn.move == null) {
                data.turn.latest = Date.now()
                data.turn.move = data.moves[Math.floor(Math.random() * data.moves.length)]
                data.trainer.bracelet = this.movement.get(data.turn.move).move_z.nombre
                if(!data.config.usedMoveZ && config.z) data.turn.move_z = true
                
                const folder = new this.megadb.crearDB(data.trainer.user, 'duel/')
                folder.establecer('data', data)
            }
        }
    }

}

module.exports = Duel