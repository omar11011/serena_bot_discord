const Base = require('../../../util/class/Command')
const randomImage = require('../../../util/functions/randomImage')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'dance'
        this.alias = ['bailar']
        this.description = 'Baila'
        this.uses = [
            ['Mostrar GIF', ''],
        ]

        this.exec = async (message, args) => {
            randomImage(message, { description: `${message.author.username} comenzó a bailar.` }, this.nombre)
        }
    }
}

module.exports = Command