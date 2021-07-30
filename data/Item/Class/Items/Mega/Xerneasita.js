const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Xerneasita'
        this.precio = 150000
    }
}

module.exports = new Mega()