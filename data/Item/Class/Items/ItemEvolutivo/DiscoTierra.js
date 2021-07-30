const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Tierra'
        this.precio = 15000
        this.emoji = '<:groundd:761189113960726528>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Tierra.'
    }
}

module.exports = new Item()