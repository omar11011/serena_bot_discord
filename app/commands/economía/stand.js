const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'stand'
        this.description = 'Da por finalizado tu juego de blackjack no pidiendo más cartas.'
        this.uses = [
            ['No pedir otra carta', ''],
        ]

        this.exec = async (message, args, server) => {
            const game = new this.bj(message.author.id)
            const data = await game.inGame()
            if(!data) return
            if(data.gameTurn < 2) return message.reply('no puedes usar este comando hasta el turno 3.')

            let ask = false
            let botCard = game.random()

            if(Math.random() > 0.5) {
                ask = true
                data.botPoints += botCard
            }

            data.gameTurn++

            const embed = {
                color: '#16A167',
                author: ['Blackjack | Turno N°' + data.gameTurn, message.author.avatarURL()],
                fields: [
                    { name: message.author.tag, value: '```No recibió ninguna carta\nPuntos: ' + data.user.points + '/21```' },
                    { name: 'Contrincante', value: '```' + (ask ? 'Ha obtenido +' + botCard : 'No recibió ninguna carta') + '\nPuntos: ' + data.botPoints + '/21```' },
                ],
                footer: 'Monto apostado: ' + data.user.amount + ' pokécuartos.'
            }

            let result = 'draw'
            game.end()

            if(data.user.points >= 21 || data.botPoints >= 21) {
                if(data.user.points == 21 || data.botPoints == 21) {
                    if(data.user.points == 21 && data.botPoints != 21) result = 'win'
                    if(data.user.points != 21 && data.botPoints == 21) result = 'loss'
                } else {
                    if(data.user.points > 21 && data.botPoints < 21) result = 'loss'
                    if(data.user.points < 21 && data.botPoints > 21) result = 'win'
                }
            } else {
                if(data.user.points > data.botPoints) result = 'win'
                if(data.user.points < data.botPoints) result = 'loss'
            }

            if(result == 'loss') embed.color = 'RED', embed.description = '¡Has perdido! Más suerte la próxima vez.'
            else {
                if(result == 'draw') embed.color = 'YELLOW', embed.description = '¡Han empatado! Se te ha devuelto tu apuesta a tu balance.'
                else {
                    embed.description = '¡Felicidades! Has obtenido la victoria y has conseguido ' + data.user.amount + ' pokécuartos.'
                    data.user.amount *= 2
                }

                await this.db.balance.increment({ money: +data.user.amount }, { where: { trainerId: data.user.trainerId } })
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command