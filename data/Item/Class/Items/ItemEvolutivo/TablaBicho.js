const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Bicho'
        this.precio = 15000
        this.emoji = '<:insect_plate:750520397077807135>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Bicho.'
    }
}

module.exports = new Item()