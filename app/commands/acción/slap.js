const Base = require('../../../util/class/Command')
const randomImage = require('../../../util/functions/randomImage')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'slap'
        this.alias = ['bofetada']
        this.description = 'Abofetea a alguien que no te gusta... ¡Usa toda tu fuerza!'
        this.uses = [
            ['Mostrar GIF', '[@usuario]'],
        ]

        this.exec = async (message, args) => {
            const mencion = message.mentions.users.first()
            randomImage(message, { description: (mencion ? message.author.username : this.client.config.bot.name) + ' le dió una bofetada a ' + (mencion ? mencion.username : message.author.username) + ' D:' }, this.nombre)
        }
    }
}

module.exports = Command