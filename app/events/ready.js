const figlet = require('figlet')

const Base = require('../../util/class/Event')
const Remind = require('../../util/class/Remind')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'ready'

        this.exec = async () => {
            await this.tempBan.load(this.db)

            figlet(this.client.config.bot.name, (err, data) => {
                if(err) return this.log.error('Ocurrió el siguiente error: ' + err)
                
                console.log(data + ' v' + this.client.package.version)
            })

            await Remind.execAllRemind()
            
            this.setPresence(this.client)
        }
    }
}

module.exports = Event