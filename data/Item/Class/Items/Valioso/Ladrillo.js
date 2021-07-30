const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Ladrillo'
        this.precio = 50
    }
}

module.exports = new Item()