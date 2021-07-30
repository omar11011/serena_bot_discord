const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Necroluna'
        this.precio = 130000
        this.emoji = '<:lunarizer:761525944128372747>'
        this.descripcion = 'Equípaselo a Lunala para que pueda cambiar a su forma Luna Llena.'
    }
}

module.exports = new Item()