const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Flama'
        this.precio = 15000
        this.emoji = '<:flame_plate:750520397132333118>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Fuego.'
    }
}

module.exports = new Item()