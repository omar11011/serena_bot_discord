const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Siniestra'
        this.precio = 15000
        this.emoji = '<:dread_plate:750520397010567318>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Siniestro.'
    }
}

module.exports = new Item()