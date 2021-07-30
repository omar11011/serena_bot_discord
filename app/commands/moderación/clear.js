const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'clear'
        this.userPermissions = ['MANAGE_MESSAGES']
        this.botPermissions = ['MANAGE_MESSAGES']
        this.uses = [
            ['Borrar mensajes del canal actual', '<cantidad>'],
        ]

        this.exec = async (message, args, server) => {
            if(!args[0] || isNaN(args[0])) return message.reply('el uso de este comando es: `' + await server.getPrefix() + this.nombre + ' <cantidad>`.')

            const number = parseInt(args[0]) <= 50 ? parseInt(args[0]) : 50
            if(number <= 0) return message.react('❌')
            
            try {
                message.channel.bulkDelete(number, true)
                setTimeout(() => {
                    message.channel.send(':white_check_mark: Se han eliminado `' + number + '` mensajes.')
                        .then(m => {
                            setTimeout(() => {
                                m.delete()
                            }, 3000)
                        })
                }, 2000)
            } catch(e) {
                this.log.error(e)
                return message.react('❌')
            }
        }
    }
}

module.exports = Command