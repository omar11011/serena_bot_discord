const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Real Plata'
        this.precio = 5000
    }
}

module.exports = new Item()