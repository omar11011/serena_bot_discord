const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Concha Tropical'
        this.precio = 1000
    }
}

module.exports = new Item()