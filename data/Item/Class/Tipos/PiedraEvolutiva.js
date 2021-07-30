const Base = require('./ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.tipo = 'Piedra Evolutiva'
        this.precio = 5000
        this.vendible = true
    }
}

module.exports = Item