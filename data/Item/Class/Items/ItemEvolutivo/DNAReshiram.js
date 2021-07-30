const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'DNA Reshiram'
        this.precio = 150000
        this.emoji = '<:dna_splicer:755318298157121588>'
        this.descripcion = 'Equípaselo a Kyurem para que pueda convertirse en su forma White Kyurem.'
    }
}

module.exports = new Item()