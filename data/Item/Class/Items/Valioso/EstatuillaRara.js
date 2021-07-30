const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Estatuilla Rara'
        this.precio = 1500
    }
}

module.exports = new Item()