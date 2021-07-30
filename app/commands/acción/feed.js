const Base = require('../../../util/class/Command')
const randomImage = require('../../../util/functions/randomImage')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'feed'
        this.description = 'Dale de comer a un usuario, o deja que yo te dé de comer. n.n'
        this.uses = [
            ['Mostrar GIF', '[@usuario]'],
        ]

        this.exec = async (message, args) => {
            const mencion = message.mentions.users.first()
            randomImage(message, { description: 'Ñaaam ' + (mencion ? mencion.username : message.author.username) + ` nwn` }, this.nombre)
        }
    }
}

module.exports = Command