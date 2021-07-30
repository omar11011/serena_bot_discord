const Base = require('../../../util/class/Command')
const randomImage = require('../../../util/functions/randomImage')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'pat'
        this.alias = ['acariciar']
        this.description = 'Acaricia a alguien del servidor.'
        this.uses = [
            ['Mostrar GIF', '[@usuario]'],
        ]

        this.exec = async (message, args) => {
            const mencion = message.mentions.users.first()
            randomImage(message, { description: message.author.username + ' acarició a ' + (mencion ? mencion.username : this.client.config.bot.name) + ' uwu' }, this.nombre)
        }
    }
}

module.exports = Command