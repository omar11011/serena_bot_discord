const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Hoja de Oro'
        this.precio = 1000
    }
}

module.exports = new Item()