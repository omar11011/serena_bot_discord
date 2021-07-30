const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tetera Rota'
        this.emoji = '<:chipped_pot:744677328067756183>'
        this.descripcion = 'Equípaselo a Sinistea para que pueda evolucionar en Polteageist.'
    }
}

module.exports = new Item()