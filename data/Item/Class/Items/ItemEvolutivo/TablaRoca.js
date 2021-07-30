const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Roca'
        this.precio = 15000
        this.emoji = '<:stone_plate:750520396700319826>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Roca.'
    }
}

module.exports = new Item()