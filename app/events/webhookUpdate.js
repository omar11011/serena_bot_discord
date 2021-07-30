const Base = require('../../util/class/Event')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'webhookUpdate'

        this.exec = async channel => {
            if(!channel.guild.me.hasPermission('VIEW_AUDIT_LOG')) return

            const server = new this.server(channel.guild.id)
            const channelId = await server.getTypeChannel('log')
            
            if(channelId) {
                channel.guild.fetchAuditLogs().then(logs => {
                    const embed = {
                        author: ['Webhook Actualizado', channel.guild.iconURL()],
                        fileds: [
                            { name: 'Usuario', value: '<@' + logs.entries.first().executor.id + '>', inline: true },
                            { name: 'Canal', value: '<#' + channel.id + '>', inline: true },
                        ],
                        thumbnail: logs.entries.first().executor.avatarURL(),
                        timestamp: true,
                        channel: channelId,
                    }

                    this.sendEmbed(oldChannel.messages, embed)
                })
            }
        }
    }
}

module.exports = Event