const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Lucha'
        this.precio = 15000
        this.emoji = '<:fightingd:761189113939623936>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Lucha.'
    }
}

module.exports = new Item()