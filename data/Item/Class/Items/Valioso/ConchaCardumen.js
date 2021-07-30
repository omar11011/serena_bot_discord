const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Concha Cardumen'
        this.precio = 10
    }
}

module.exports = new Item()