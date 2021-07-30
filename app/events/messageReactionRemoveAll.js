const Base = require('../../util/class/Event')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'messageReactionRemoveAll'

        this.exec = async message => {
            const server = new this.server(message.guild.id)
            const channelId = await server.getTypeChannel('log')
            
            if(channelId) {
                const embed = {
                    author: [message.guild.name, message.guild.iconURL()],
                    description: 'Se eliminaron todas las reacciones de un mensaje.',
                    fields: [
                        { name: 'Mensaje', value: message.content },
                        { name: 'Canal', value: '<#' + message.channel.id + '>' },
                    ],
                    timestamp: true,
                    channel: channelId,
                }

                this.sendEmbed(message, embed)
            }
        }
    }
}

module.exports = Event