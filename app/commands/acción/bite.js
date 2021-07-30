const Base = require('../../../util/class/Command')
const randomImage = require('../../../util/functions/randomImage')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'bite'
        this.description = 'Muerde al usuario mencionado. O muérdeme owo'
        this.uses = [
            ['Mostrar GIF', '[@usuario]'],
        ]

        this.exec = async (message, args) => {
            const mencion = message.mentions.users.first()
            randomImage(message, { description: `Ñam... ${message.author.username} muerde a ${mencion ? mencion.username : this.client.config.bot.name}.` }, this.nombre)
        }
    }
}

module.exports = Command