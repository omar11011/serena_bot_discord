const Base = require('../Base')

class Volador extends Base {
    constructor() {
        super()

        this.nombre = 'Volador'
    }
}

module.exports = new Volador()