const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Pluma Bella'
        this.precio = 500
    }
}

module.exports = new Item()