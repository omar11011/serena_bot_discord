const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Pendiente'
        this.precio = 300
    }
}

module.exports = new Item()