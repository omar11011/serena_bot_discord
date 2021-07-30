const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Acero'
        this.precio = 15000
        this.emoji = '<:steeld:761189113935560734>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Acero.'
    }
}

module.exports = new Item()