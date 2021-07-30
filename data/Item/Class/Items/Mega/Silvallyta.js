const Base = require('../../Tipos/MegaPiedra')

class Mega extends Base {
    constructor() {
        super()

        this.nombre = 'Silvallyta'
        this.precio = 120000
    }
}

module.exports = new Mega()