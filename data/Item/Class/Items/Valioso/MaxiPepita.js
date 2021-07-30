const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Maxipepita'
        this.precio = 20000
    }
}

module.exports = new Item()