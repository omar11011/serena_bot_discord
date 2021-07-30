const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'blackjack'
        this.alias = ['bj']
        this.cooldown = 300
        this.description = 'Juega al blackjack, la cantidad máxima de apuesta son 500 pokécuartos.'
        this.uses = [
            ['Apostar', '<apuesta>'],
        ]
        this.ignoreCaptcha = false

        this.exec = async (message, args, server) => {
            const prefix = await server.getPrefix()
            if(!args[0] || isNaN(args[0]) || parseInt(args[0]) < 1) return message.reply('el uso de este comando es: `' + prefix + this.nombre + ' <apuesta>`')

            const trade = new this.trade(message.author.id)
            const inTrade = await trade.inTrade()

            if(inTrade) return message.reply('no puedes usar este comando mientras estás en un intercambio.')
            else trade.end()

            let limit = 500
            let amount = parseInt(args[0])
            let game = new this.bj(message.author.id)
            let dataGame = await game.inGame()

            if(dataGame) return message.reply('actualmente estás dentro de una partida.')

            const balance = await this.db.balance.findOne({ include: [ { model: this.db.trainer, as: 'trainer', where: { user: message.author.id }, attributes: [] } ] })
            if(!balance) {
                game.end()
                return message.reply('aún no estás registrado como entrenador pokémon.')
            }
            if(amount > balance.money) {
                game.end()
                return message.reply('no tienes suficiente dinero para apostar.')
            }

            const embed = {
                color: '#16A167',
                author: ['Blackjack', message.author.avatarURL()],
                description: 'Lee las indicaciones si es tu primera vez jugando, recuerda que ganará el usuario que logre hacer 21 un puntos o se acerque a este mismo',
                fields: [
                    { name: 'HIT', value: 'Obtén una carta de la baraja.', inline: true },
                    { name: 'DOUBLE', value: 'Obtén dos cartas de la baraja.', inline: true },
                    { name: 'STAND', value: 'Da por terminada la ronda no pidiendo otra carta.', inline: true },
                ],
                footer: 'Has apostado ' + amount + ' pokécuartos.'
            }

            if(amount > limit) {
                amount = limit
                embed.footer = 'Tu apuesta ha excedido el límite, por lo tanto la he corregido a ' + limit + ' pokécuartos.'
            }

            await this.db.balance.increment({ money: -amount }, { where: { trainerId: balance.trainerId } })

            game.create(amount, balance.trainerId)

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command