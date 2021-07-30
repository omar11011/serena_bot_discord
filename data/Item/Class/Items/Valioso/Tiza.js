const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tiza'
        this.precio = 30
    }
}

module.exports = new Item()