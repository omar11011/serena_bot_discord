const Base = require('../../../util/class/Command')
const randomImage = require('../../../util/functions/randomImage')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'angry'
        this.alias = ['enojo', 'enojar', 'enojarse']
        this.description = 'Expresa que estás enfadado.\nSi mencionas a alguién darás a entender que estás enfadado/a con esa persona.'
        this.uses = [
            ['Mostrar GIF', ''],
        ]

        this.exec = async (message, args) => {
            const mencion = message.mentions.users.first()
            randomImage(message, { description: `${message.author.username} se ha enfadado${(mencion) ? ' con ' + mencion.username : ''} >:c` }, this.nombre)
        }
    }
}

module.exports = Command