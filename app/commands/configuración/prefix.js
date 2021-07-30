const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'prefix'
        this.alias = ['prefijo']
        this.description = 'Cambia el prefijo del servidor.'
        this.userPermissions = ['ADMINISTRATOR']
        this.uses = [
            ['Cambiar el prefijo', '<prefijo>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0]) return message.channel.send('❌ ¡Ups! Se te olvidó colocar el nuevo prefijo.')
            if(args[0].length > 2) return message.channel.send('❌ Los prefijos no pueden tener más de dos caracteres.')

            server.setPrefix(args[0])

            return message.channel.send('El nuevo prefijo del servidor es: `' + args[0] + '`')
        }
    }
}

module.exports = Command