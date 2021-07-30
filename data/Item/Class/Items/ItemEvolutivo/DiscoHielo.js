const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Hielo'
        this.precio = 15000
        this.emoji = '<:iced:761189113972916224>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Hielo.'
    }
}

module.exports = new Item()