const Base = require('../Base')

class Rápido extends Base {
    constructor() {
        super()

        this.nombre = 'Rápido'

        this.needExp = level => {
            return Math.round(4 * Math.pow(level, 3) / 5)
        }
    }
}

module.exports = new Rápido()