const Base = require('../../util/class/Event')

class Event extends Base {
    constructor() {
        super()

        this.nombre = 'reconnecting'

        this.exec = async () => {
            this.log.success('Reconectando...')
        }
    }
}

module.exports = Event