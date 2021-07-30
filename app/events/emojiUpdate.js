const Base = require('../../util/class/Event')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'emojiUpdate'

        this.exec = async (oldEmoji, newEmoji) => {
            const server = new this.server(oldEmoji.guild.id)
            const channelId = await server.getTypeChannel('log')

            if(channelId) {
                const embed = {
                    author: [oldEmoji.guild.name, oldEmoji.guild.iconURL()],
                    description: `El emoji **${oldEmoji.name}** fue actualizado a **${newEmoji.name}** :${newEmoji.name}:`,
                    timestamp: true,
                    channel: channelId,
                }
                const content = this.sendEmbed('', embed, false)
    
                this.client.channels.cache.get(embed.channel).send(content)
            }
        }
    }
}

module.exports = Event