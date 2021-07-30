const Base = require('../../util/class/Event')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'channelPinsUpdate'

        this.exec = async (channel, time) => {
            const server = new this.server(channel.id)
            const channelId = await server.getTypeChannel('log')

            if(channel) {
                const embed = {
                    author: [channel.guild.name, channel.guild.iconURL()],
                    description: `Se actualizo un mensaje anclado en <#${channel.id}>.`,
                    timestamp: true,
                    channel: channelId,
                }
                
                this.sendEmbed(channel.messages, embed)
            }
        }
    }
}

module.exports = Event