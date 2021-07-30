const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Cielo'
        this.precio = 15000
        this.emoji = '<:sky_plate:750520397039927418>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Volador.'
    }
}

module.exports = new Item()