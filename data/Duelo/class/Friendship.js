const Base = require('../Base')

const { MessageCollector } = require('discord.js')

class Duel extends Base {

    constructor(message, user) {
        super(message, user)

        this.typeDuel = 'friendship'

        this.automatic = {
            leave: { use: false, anyGuild: false, anyChannel: false },
            move: { use: false, anyGuild: false, anyChannel: false },
            mega: { use: false, anyGuild: false, anyChannel: false },
            gigamax: { use: false, anyGuild: false, anyChannel: false },
            temporal: { use: false, anyGuild: false, anyChannel: false },
        }

        this.leave = async user => {
            const limit = 3

            user.config.leave++
            if(user.config.leave == limit) {
                this.delete(user.config.rival)
                return this.message.reply('he dado por finalizado tu duelo.')
            }

            let status = false
            this.message.channel.send('<@' + user.config.rival + '>, el usuario ' + this.message.author.username + ' desea abandonar el duelo, para aceptar escribe `yes`.').then(m => {
                setTimeout(async () => {
                    if(!status) {
                        await m.react('⌛')
                        return this.folder.establecer('data', user)
                    }
                }, 15000)
            })

            const collector = new MessageCollector(this.message.channel, m => m.author.id == user.config.rival, { time: 10000, max: 1 })
            collector.on('collect', async msg => {
                status = true
                const response = msg.content.toLowerCase()
                if(response == 'yes') {
                    this.delete(user.config.rival)
                    return this.message.reply('he dado por finalizado tu duelo.')
                } else {
                    await msg.react('❌')
                    return this.folder.establecer('data', user)
                }
            })
        }

        this.reward = async (win, loss) => {
            let msg = 'Ninguno de los dos pokémon pueden continuar, el duelo ha terminado en empate.'

            if(win != null) {
                msg = '¡' + win.trainer.name + ' y ' + win.pokemon.form + ' han ganado el combate!'

                if(!win.config.match) {
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
                    }

                    const evolve = winPokemon.getEvolveLevel(win.pokemon.level, win.pokemon.gender)
                    if(evolve) {
                        if(win.pokemon.name == win.pokemon.form) win.pokemon.name = evolve
                        msg += '\n' + win.pokemon.form + ' ha evolucionado en ' + evolve + '.'
                        win.pokemon.form = evolve
                    }

                    await this.db.pokemon.update({ pokemon: win.pokemon.form, name: win.pokemon.name, xp: win.pokemon.xp, level: win.pokemon.level }, { where: { id: win.pokemon.id } })
                }
            }
            
            return msg
        }
    }

}

module.exports = Duel