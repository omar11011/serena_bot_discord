const Base = require('../Base')

class Alola extends Base {
    constructor() {
        super()

        this.nombre = 'Alola'
        this.generacion = 7
    }
}

module.exports = new Alola()