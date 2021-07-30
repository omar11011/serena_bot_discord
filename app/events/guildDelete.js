const Base = require('../../util/class/Event')
const exec = require('child_process').exec

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'guildDelete'

        this.exec = async guild => {
            const server = new this.server(guild.id)
            server.delete()

            this.setPresence(this.client)
            this.log.alert('He salido de un servidor: ' + guild.name)

            exec('rm app/mega_databases/server/' + guild.id + '.json', async (err, stdout, stderr) => {
                if(err) return this.log.error(err)
            })

            exec('rm app/mega_databases/spawn/' + guild.id + '.json', async (err, stdout, stderr) => {
                if(err) return this.log.error(err)
            })
        }
    }
}

module.exports = Event