const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Draco'
        this.precio = 15000
        this.emoji = '<:dragond:761189113638027276>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Dragón.'
    }
}

module.exports = new Item()