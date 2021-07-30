const Base = require('../../util/class/Event')
const Welcome = require('../../util/class/WelcomeImage')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'guildMemberAdd'
        this.sendWelcome = require('../../util/functions/createWelcome')

        this.exec = async member => {
            const server = new this.server(member.guild.id)
            const channelId = await server.getTypeChannel('welcome')
            const dataWelcome = await server.getDataWelcome()
            const usersPerma = await server.getUsersPerma()

            if(usersPerma.mute.includes(member.id)) {
                const role = member.guild.roles.cache.find(r => r.name === 'Muted')
                if(role) {
                    try {
                        member.roles.add(role)
                    } catch(err) {
                        this.log.error(err)
                    }
                }
            }
            if(usersPerma.ban.includes(member.id)) {
                try {
                    return member.guild.member(member).ban()
                } catch(err) {
                    this.log.error(err)
                }
            }

            if(channelId) {
                dataWelcome.channel = channelId

                const welcome = new Welcome(1920, 1080)
                await welcome.create(this.client, member, dataWelcome)
            }
        }
    }
}

module.exports = Event