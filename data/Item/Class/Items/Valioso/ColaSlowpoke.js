const Base = require('../../Tipos/Valioso')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Cola Slowpoke'
        this.precio = 4900
    }
}

module.exports = new Item()