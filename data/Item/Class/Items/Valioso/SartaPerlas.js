const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Sarta Perlas'
        this.precio = 15000
    }
}

module.exports = new Item()