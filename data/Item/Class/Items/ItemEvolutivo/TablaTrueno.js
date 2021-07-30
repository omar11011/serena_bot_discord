const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Trueno'
        this.precio = 15000
        this.emoji = '<:zap_plate:750520397082132600>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Eléctrico.'
    }
}

module.exports = new Item()