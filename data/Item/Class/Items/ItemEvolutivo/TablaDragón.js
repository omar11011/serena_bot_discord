const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Tabla Draco'
        this.precio = 15000
        this.emoji = '<:draco_plate:750520396851445782>'
        this.descripcion = 'Equípaselo a Arceus para que pueda cambiar su tipo a Dragón.'
    }
}

module.exports = new Item()