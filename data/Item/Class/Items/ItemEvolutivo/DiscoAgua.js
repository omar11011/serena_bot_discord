const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Agua'
        this.precio = 15000
        this.emoji = '<:waterd:761189113914851328>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Agua.'
    }
}

module.exports = new Item()