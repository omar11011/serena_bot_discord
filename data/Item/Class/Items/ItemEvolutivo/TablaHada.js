const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Hada'
        this.precio = 15000
        this.emoji = '<:pixie_plate:750520397203767366>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Hada.'
    }
}

module.exports = new Item()