const Base = require('../../../util/class/Command')
const randomImage = require('../../../util/functions/randomImage')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'bored'
        this.description = 'Expresa que estas aburrido/a.'
        this.uses = [
            ['Mostrar GIF', ''],
        ]

        this.exec = async (message, args) => {
            randomImage(message, { description: `${message.author.username} se ha aburrido.` }, this.nombre)
        }
    }
}

module.exports = Command