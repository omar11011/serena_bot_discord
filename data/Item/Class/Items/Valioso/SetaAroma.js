const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Seta Aroma'
        this.precio = 7500
    }
}

module.exports = new Item()