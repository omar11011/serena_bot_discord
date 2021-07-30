const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Polvo Estelar'
        this.precio = 1500
    }
}

module.exports = new Item()