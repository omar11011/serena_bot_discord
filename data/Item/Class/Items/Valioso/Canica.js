const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Canica'
        this.precio = 150
    }
}

module.exports = new Item()