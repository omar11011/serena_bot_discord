const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Veneno'
        this.precio = 15000
        this.emoji = '<:poisond:761189113935167498>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Veneno.'
    }
}

module.exports = new Item()