const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Fantasma'
        this.precio = 15000
        this.emoji = '<:spooky_plate:750520396952109128>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Fantasma.'
    }
}

module.exports = new Item()