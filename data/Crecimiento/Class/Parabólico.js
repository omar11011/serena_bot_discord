const Base = require('../Base')

class Parabólico extends Base {
    constructor() {
        super()

        this.nombre = 'Parabólico'

        this.needExp = level => {
            return Math.round((6 * Math.pow(level, 3) / 5) - (15 * Math.pow(level, 2)) + (100 * level) - 140)
        }
    }
}

module.exports = new Parabólico()