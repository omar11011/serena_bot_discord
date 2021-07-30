const Base = require('../Base')

class Teselia extends Base {
    constructor() {
        super()

        this.nombre = 'Teselia'
        this.generacion = 5
    }
}

module.exports = new Teselia()