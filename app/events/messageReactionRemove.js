const Base = require('../../util/class/Event')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'messageReactionRemove'

        this.exec = async (reaction, user) => {
            const server = new this.server(reaction.message.guild.id)
            const channelId = await server.getTypeChannel('log')

            if(channelId) {
                const embed = {
                    author: [reaction.message.guild.name, reaction.message.guild.iconURL()],
                    description: `Se ha retirado una reacción de un mensaje.`,
                    fields: [
                        { name: 'Usuario', value: user.tag, inline: true },
                        { name: 'Emoji', value: '<:' + reaction.emoji.name + ':' + reaction.emoji.id + '>', inline: true },
                        { name: 'Canal', value: '<#' + reaction.message.channel.id + '>', inline: true },
                        { name: 'Mensaje', value: reaction.message.content },
                    ],
                    timestamp: true,
                    channel: channelId,
                }

                this.sendEmbed(reaction.message, embed)
            }
        }
    }
}

module.exports = Event