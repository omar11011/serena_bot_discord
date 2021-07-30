const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Tierra'
        this.precio = 15000
        this.emoji = '<:earth_plate:750520396994052117>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Tierra.'
    }
}

module.exports = new Item()