const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Hielo'
        this.precio = 15000
        this.emoji = '<:icicle_plate:750520397018955877>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Hielo.'
    }
}

module.exports = new Item()