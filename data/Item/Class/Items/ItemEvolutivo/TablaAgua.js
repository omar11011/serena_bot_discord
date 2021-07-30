const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Agua'
        this.precio = 15000
        this.emoji = '<:splash_plate:750520397082132560>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Agua.'
    }
}

module.exports = new Item()