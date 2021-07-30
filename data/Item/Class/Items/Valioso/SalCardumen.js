const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Sal Cardumen'
        this.precio = 10
    }
}

module.exports = new Item()