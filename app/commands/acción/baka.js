const Base = require('../../../util/class/Command')
const randomImage = require('../../../util/functions/randomImage')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'baka'
        this.description = '¡BAKA!\nPuedes mencionar a alguien para decirle que es un baka.'
        this.uses = [
            ['Mostrar GIF', ''],
        ]

        this.exec = async (message, args) => {
            const mencion = message.mentions.users.first()
            randomImage(message, { description: `${mencion ? mencion.username : message.author.username}, ¡¡¡BAKAA!!!` }, this.nombre)
        }
    }
}

module.exports = Command