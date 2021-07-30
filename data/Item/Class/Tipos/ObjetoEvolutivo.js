const Base = require('./ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.tipo = 'Objeto Evolutivo'
        this.vendible = true
    }
}

module.exports = Item