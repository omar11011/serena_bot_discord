const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Muelle Estirado'
        this.precio = 100
    }
}

module.exports = new Item()