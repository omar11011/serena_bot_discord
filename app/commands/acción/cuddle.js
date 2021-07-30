const Base = require('../../../util/class/Command')
const randomImage = require('../../../util/functions/randomImage')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'cuddle'
        this.alias = ['acurrucarse']
        this.description = 'Acurrúcate con alguien o conmigo.'
        this.uses = [
            ['Mostrar GIF', '[@usuario]'],
        ]

        this.exec = async (message, args) => {
            const mencion = message.mentions.users.first()
            randomImage(message, { description: mencion ? message.author.username + ' se acurruca en ' + mencion.username + ' UwU' : 'Acurrúcate conmigo nwn' }, this.nombre)
        }
    }
}

module.exports = Command