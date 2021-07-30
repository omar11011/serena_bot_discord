const Base = require('../../util/class/Event')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'guildUnavailable'

        this.exec = async () => {
            this.log.alert(`Un servidor no está disponible, probablemente debido a una interrupción con el servidor de Discord\nServidor: ${guild.name} (${guild.id}`)
        }
    }
}

module.exports = Event