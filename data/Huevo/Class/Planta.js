const Base = require('../Base')

class Planta extends Base {
    constructor() {
        super()

        this.nombre = 'Planta'
    }
}

module.exports = new Planta()