const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Bola Arcilla'
        this.precio = 600
    }
}

module.exports = new Item()