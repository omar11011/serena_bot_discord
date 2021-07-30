const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Planta'
        this.precio = 15000
        this.emoji = '<:meadow_plate:750520397207699477>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Planta.'
    }
}

module.exports = new Item()