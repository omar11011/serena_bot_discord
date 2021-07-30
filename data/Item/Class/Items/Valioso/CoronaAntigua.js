const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Corona Antigua'
        this.precio = 300000
    }
}

module.exports = new Item()