const Base = require('../Base')

class Sinnoh extends Base {
    constructor() {
        super()

        this.nombre = 'Sinnoh'
        this.generacion = 4
    }
}

module.exports = new Sinnoh()