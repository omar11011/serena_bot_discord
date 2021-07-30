const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Manzana Dulce'
        this.emoji = '<:sweet_apple:744677340361261149>'
        this.descripcion = 'Equípaselo a Applin para que pueda evolucionar en Appletun.'
    }
}

module.exports = new Item()