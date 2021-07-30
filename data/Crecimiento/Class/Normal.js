const Base = require('../Base')

class Normal extends Base {
    constructor() {
        super()

        this.nombre = 'Normal'

        this.needExp = level => {
            return Math.round(Math.pow(level, 3))
        }
    }
}

module.exports = new Normal()