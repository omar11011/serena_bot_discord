const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Manzana Ácida'
        this.emoji = '<:tart_apple:744677340088500315>'
        this.descripcion = 'Equípaselo a Applin para que pueda evolucionar en Flapple.'
    }
}

module.exports = new Item()