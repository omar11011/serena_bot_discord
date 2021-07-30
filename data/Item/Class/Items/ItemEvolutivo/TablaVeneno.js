const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Veneno'
        this.precio = 15000
        this.emoji = '<:toxic_plate:750520397304168548>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Veneno.'
    }
}

module.exports = new Item()