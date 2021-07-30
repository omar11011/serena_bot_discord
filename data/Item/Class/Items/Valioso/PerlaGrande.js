const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Perla Grande'
        this.precio = 4000
    }
}

module.exports = new Item()