const Base = require('../../../util/class/Command')
const randomImage = require('../../../util/functions/randomImage')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'cook'
        this.alias = ['cocinar']
        this.description = 'Cocina algo para ti o para alguien.'
        this.uses = [
            ['Mostrar GIF', ''],
        ]

        this.exec = async (message, args) => {
            const mencion = message.mentions.users.first()
            randomImage(message, { description: message.author.username + ` cocina algo delicioso${mencion ? ' para ' + mencion.username : ''} UwU` }, this.nombre)
        }
    }
}

module.exports = Command