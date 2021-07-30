const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Lucha'
        this.precio = 15000
        this.emoji = '<:fist_plate:750520396846989353>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Lucha.'
    }
}

module.exports = new Item()