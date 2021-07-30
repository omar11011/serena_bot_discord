const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Efigie Antigua'
        this.precio = 200000
    }
}

module.exports = new Item()