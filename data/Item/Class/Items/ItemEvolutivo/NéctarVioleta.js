const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Néctar Violeta'
        this.emoji = '<:purplenectar:761151675158364161>'
        this.descripcion = 'Equípaselo a Oricorio para que pueda cambiar a su forma Refinada.'
    }
}

module.exports = new Item()