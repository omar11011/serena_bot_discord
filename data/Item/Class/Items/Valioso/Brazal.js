const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Brazal'
        this.precio = 100000
    }
}

module.exports = new Item()