const Base = require('../Base')

class Hoenn extends Base {
    constructor() {
        super()

        this.nombre = 'Hoenn'
        this.generacion = 3
    }
}

module.exports = new Hoenn()