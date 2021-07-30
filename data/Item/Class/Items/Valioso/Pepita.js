const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Pepita'
        this.precio = 5000
    }
}

module.exports = new Item()