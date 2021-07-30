const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Trueno'
        this.precio = 15000
        this.emoji = '<:electricd:761189113927041025>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Eléctrico.'
    }
}

module.exports = new Item()