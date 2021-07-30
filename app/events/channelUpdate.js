const Base = require('../../util/class/Event')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'channelUpdate'

        this.exec = async (oldChannel, newChannel) => {
            if(!oldChannel.guild || !oldChannel.guild.me.hasPermission('VIEW_AUDIT_LOG')) return

            const server = new this.server(oldChannel.id)
            const channelId = await server.getTypeChannel('log')
            
            if(channelId) {
                const embed = { channel: channelId }

                oldChannel.guild.fetchAuditLogs().then(logs => { 
                    let userID = logs.entries.first().executor.id
            
                    if(oldChannel.name !== newChannel.name) {
            
                        embed.title = 'Canal editado'
                        embed.fields = [
                            { name: 'Nombre anterior', value: oldChannel.name, inline: true },
                            { name: 'Nuevo nombre', value: newChannel.name, inline: true },
                            { name: 'Usuario', value: `<@${userID}> (ID: ${userID})` },
                        ]
                        embed.footer = `Canal ID: ${oldChannel.id}`
                        embed.timestamp = true
                    }
                    else return
                    
                    this.sendEmbed(oldChannel.messages, embed)
                })
            }
        }
    }
}

module.exports = Event