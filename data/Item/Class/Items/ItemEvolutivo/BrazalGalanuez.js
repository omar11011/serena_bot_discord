const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Brazal Galanuez'
        this.emoji = '<:galarica_cuff:744677329028251780>'
        this.descripcion = 'Equípaselo a Galarian Slowpoke para que pueda evolucionar en Galarian Slowbro.'
    }
}

module.exports = new Item()