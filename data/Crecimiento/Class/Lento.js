const Base = require('../Base')

class Lento extends Base {
    constructor() {
        super()

        this.nombre = 'Lento'

        this.needExp = level => {
            return Math.round(5 * Math.pow(level, 3) / 4)
        }
    }
}

module.exports = new Lento()