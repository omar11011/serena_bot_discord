const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Real Cobre'
        this.precio = 1000
    }
}

module.exports = new Item()