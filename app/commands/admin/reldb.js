const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'reldb'
        this.uses = [
            ['Liberar usuario de un duelo', '<user> duel'],
            ['Liberar usuario de un intercambio', '<user> trade'],
            ['Liberar usuario de un blackjack', '<user> bj'],
        ]

        this.exec = async (message, args, server) => {
            if(args.length < 2) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <user> <proceso>`')

            const admin = await this.db.trainer.findOne({ where: { user: message.author.id } })
            if(!admin || admin.rank == null) return message.reply('no tienes permiso para ejecutar este comando.')

            const mencion = message.mentions.members.first()
            const data = { user: mencion ? mencion.id : args[0], process: args[1].toLowerCase() }
            const embed = {
                color: '#16A167',
                author: [message.author.tag, message.author.avatarURL()],
                timestamp: true,
            }

            if(data.process == 'bj') {
                const event = new this.bj(data.user)
                const dataEvent = await event.inGame()

                event.end()
                embed.description = dataEvent ? 'Has liberado a <@' + data.user + '> de su partida de blackjack.' : 'Este usuario no estaba en ninguna partida de blackjack.'
            } 
            else if(data.process == 'trade') {
                const event = new this.trade(data.user)
                const dataEvent = await event.inTrade()

                event.end()
                embed.description = dataEvent ? 'Has liberado a <@' + data.user + '> de su intercambio.' : 'Este usuario no estaba en ningún intercambio.'

                if(dataEvent) {
                    const other = new this.trade(dataEvent.other)
                    other.end()
                }
            }
            else if(data.process == 'duel') {
                const event = new this.duel(data.user)
                const dataEvent = await event.inDuel()

                event.end()
                embed.description = dataEvent ? 'Has liberado a <@' + data.user + '> de su duelo.' : 'Este usuario no estaba en ningún duelo.'

                if(dataEvent) {
                    const other = new this.duel(dataEvent.rival)
                    other.end()
                }
            }
            else return message.react('❓')

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command