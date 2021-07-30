const Base = require('../../../util/class/Command')
const randomImage = require('../../../util/functions/randomImage')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'clap'
        this.alias = ['claps', 'aplaudir', 'palmas']
        this.description = 'Aplaude'
        this.uses = [
            ['Mostrar GIF', ''],
        ]

        this.exec = async (message, args) => {
            randomImage(message, { description: message.author.username + ` está aplaudiendo.` }, this.nombre)
        }
    }
}

module.exports = Command