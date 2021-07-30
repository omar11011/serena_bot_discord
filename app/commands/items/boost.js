const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'boost'
        this.alias = ['boosts']
        this.description = 'Los boosts permiten tener más de un spawn en el servidor.'
        this.uses = [
            ['Información de los boosts del server', ''],
        ]

        this.exec = async (message, args, server) => {
            const boost = await server.getBoost()
            const prefix = await server.getPrefix()
            const embed = {
                color: '#16A167',
                author: [message.guild.name, message.guild.iconURL()],
                description: 'Este servidor ' + (boost == 0 ? 'no posee más boosts.' : 'aún tiene `' + boost + '` boost' + (boost == 1 ? '' : 's') + '.'),
                footer: 'Si tienes un boost en el inventario puedes otorgarlo haciendo uso del comando ' + prefix + 'use boost'
            }

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command