const ItemEvolutivo = require('./ItemEvolutivo')

class Objeto extends ItemEvolutivo {
    constructor() {
        super()

        this.tipo = 'Objeto de Intercambio'
        this.precio = 5000
        this.vendible = true
        this.equipable = true
    }
}

module.exports = Objeto