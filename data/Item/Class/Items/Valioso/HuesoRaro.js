const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Hueso Raro'
        this.precio = 2500
    }
}

module.exports = new Item()