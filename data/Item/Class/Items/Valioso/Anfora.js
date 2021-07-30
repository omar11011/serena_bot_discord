const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Ánfora'
        this.precio = 50000
    }
}

module.exports = new Item()