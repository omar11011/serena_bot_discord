const Base = require('../Base')

class Johto extends Base {
    constructor() {
        super()

        this.nombre = 'Johto'
        this.generacion = 2
    }
}

module.exports = new Johto()