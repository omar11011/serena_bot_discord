const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'hit'
        this.description = 'Pide una carta durante tu turno en el blackjack.'
        this.uses = [
            ['Pedir una carta', ''],
        ]

        this.exec = async (message, args, server) => {
            const game = new this.bj(message.author.id)
            const data = await game.inGame()
            if(!data) return

            const userCard = game.random()
            const botCard = game.random()

            data.user.points += userCard
            data.botPoints += botCard
            data.gameTurn++

            const embed = {
                color: '#16A167',
                author: ['Blackjack | Turno N°' + data.gameTurn, message.author.avatarURL()],
                fields: [
                    { name: message.author.tag, value: '```Ha obtenido +' + userCard + '\nPuntos: ' + data.user.points + '/21```' },
                    { name: 'Contrincante', value: '```Ha obtenido +' + botCard + '\nPuntos: ' + data.botPoints + '/21```' },
                ],
                footer: 'Monto apostado: ' + data.user.amount + ' pokécuartos.'
            }

            if(data.user.points >= 21 || data.botPoints >= 21) {
                let result = 'draw'
                game.end()

                if(data.user.points == 21 || data.botPoints == 21) {
                    if(data.user.points == 21 && data.botPoints != 21) result = 'win'
                    if(data.user.points != 21 && data.botPoints == 21) result = 'loss'
                } else {
                    if(data.user.points > 21 && data.botPoints < 21) result = 'loss'
                    if(data.user.points < 21 && data.botPoints > 21) result = 'win'
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
            } else {
                game.folder.establecer('data', data)
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command