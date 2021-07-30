const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Mente'
        this.precio = 15000
        this.emoji = '<:mind_plate:750520396717228143>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Psíquico.'
    }
}

module.exports = new Item()