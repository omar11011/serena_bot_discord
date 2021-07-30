const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Planta'
        this.precio = 15000
        this.emoji = '<:grassd:761189114027442187>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Planta.'
    }
}

module.exports = new Item()