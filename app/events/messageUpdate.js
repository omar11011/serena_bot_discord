const Base = require('../../util/class/Event')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'messageUpdate'

        this.exec = async (oldMessage, newMessage) => {
            const server = new this.server(oldMessage.channel.guild.id)
            const channelId = await server.getTypeChannel('log')

            if(channelId && !oldMessage.author.bot && oldMessage.content != newMessage.content) {
                const embed = {
                    author: [oldMessage.author.tag, oldMessage.author.avatarURL()],
                    title: `Mensaje editado en #${oldMessage.channel.name}`,
                    fields: [
                        { name: 'Mensaje anterior', value: oldMessage.content },
                        { name: 'Nuevo mensaje', value: newMessage.content },
                    ],
                    footer: `ID: ${oldMessage.author.id}`,
                    timestamp: true,
                    channel: channelId,
                }
                
                this.sendEmbed(oldMessage, embed)
            }
        }
    }
}

module.exports = Event