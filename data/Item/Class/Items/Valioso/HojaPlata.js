const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Hoja de Plata'
        this.precio = 500
    }
}

module.exports = new Item()