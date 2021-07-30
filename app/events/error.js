const Base = require('../../util/class/Event')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'error'

        this.exec = async error => {
            this.log.error('Ha ocurrido un error de conexión: ' + error)
        }
    }
}

module.exports = Event