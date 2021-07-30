const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Real Oro'
        this.precio = 30000
    }
}

module.exports = new Item()