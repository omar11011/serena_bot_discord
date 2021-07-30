const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Bicho'
        this.precio = 15000
        this.emoji = '<:bugd:761189114010927144>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Bicho.'
    }
}

module.exports = new Item()