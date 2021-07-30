const Base = require('../../util/class/Event')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'guildCreate'

        this.exec = async guild => {
            const server = new this.server(guild.id)
            server.create()

            this.setPresence(this.client)
            this.log.success('He entrado a un nuevo servidor: ' + guild.name)
        }
    }
}

module.exports = Event