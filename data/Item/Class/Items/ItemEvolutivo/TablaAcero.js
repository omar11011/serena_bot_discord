const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Acero'
        this.precio = 15000
        this.emoji = '<:iron_plate:750520403490897980>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Acero.'
    }
}

module.exports = new Item()