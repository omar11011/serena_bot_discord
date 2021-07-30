const Base = require('../../../util/class/Command')
const randomImage = require('../../../util/functions/randomImage')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'cheek'
        this.alias = ['cheeks', 'mejilla', 'mejillas']
        this.description = 'Pellizca algunas mejillas.'
        this.uses = [
            ['Mostrar GIF', ''],
        ]

        this.exec = async (message, args) => {
            randomImage(message, { description: `UwU` }, this.nombre)
        }
    }
}

module.exports = Command