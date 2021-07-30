const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Roca'
        this.precio = 15000
        this.emoji = '<:rockd:761189113537363980>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Roca.'
    }
}

module.exports = new Item()