const Base = require('../Base')

class Kalos extends Base {
    constructor() {
        super()

        this.nombre = 'Kalos'
        this.generacion = 6
    }
}

module.exports = new Kalos()