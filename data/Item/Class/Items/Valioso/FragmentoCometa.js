const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Fragmento Cometa'
        this.precio = 30000
    }
}

module.exports = new Item()