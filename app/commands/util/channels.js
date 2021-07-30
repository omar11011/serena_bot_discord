const Base = require('../../../util/class/Command')

class Command extends Base {

    constructor() {
        super()
        
        this.nombre = 'channels'
        this.alias = ['channel', 'canal', 'canales']
        this.description = 'Muestra los canales especializados en el servidor.'
        this.uses = [
            ['Información de los canales', ''],
        ]

        this.exec = async (message, args, server) => {
            const prefix = await server.getPrefix()
            const channels = await server.getTypeChannel(false, true)
            const embed = {
                author: [message.guild.name, message.guild.iconURL()],
                description: 'Recuerda que puedes establecer canales haciendo uso de los comandos `' + prefix + 'setchannel` y `' + prefix + 'redirect`.',
                fields: [
                    { name: 'Registro', value: channels.log == null ? 'No establecido' : '<#' + channels.log + '>', inline: true },
                    // { name: 'Bienvenida', value: channels.welcome == null ? 'No establecido' : '<#' + channels.welcome + '>', inline: true },
                ],
            }
            
            const spawn = []
            for(let i = 0; i < channels.spawn.length; i++) spawn.push('<#' + channels.spawn[i] + '>')
            embed.fields.push({ name: 'Spawn', value: spawn.length > 0 ? spawn.join('\n') : 'No establecido', inline: true })

            return this.sendEmbed(message, embed)
        }
    }
}

module.exports = Command