const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Trozo Estrella'
        this.precio = 6000
    }
}

module.exports = new Item()