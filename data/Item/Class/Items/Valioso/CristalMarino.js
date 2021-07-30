const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Cristal Marino'
        this.precio = 400
    }
}

module.exports = new Item()