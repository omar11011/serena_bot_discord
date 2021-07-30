const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Mini Seta'
        this.precio = 250
    }
}

module.exports = new Item()