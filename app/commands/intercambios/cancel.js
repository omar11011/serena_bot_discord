const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'cancel'
        this.alias = ['cancelar']
        this.description = 'Da por finalizado tu intercambio.'
        this.uses = [
            ['Cancelar intercambio', ''],
        ]

        this.exec = async (message, args, server) => {
            const user = new this.trade(message.author.id)
            const userInTrade = await user.inTrade()
            const embed = {
                color: 'RED',
                author: '🖥️ Centro de Intercambios',
                description: 'No estás dentro de ningún intercambio en este momento.'
            }

            if(userInTrade) {
                const other = new this.trade(userInTrade.other)
                other.end()

                embed.color = '#16A167'
                embed.description = 'He dado por finalizado tu intercambio.'
            }

            user.end()
            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command