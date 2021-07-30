const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Fantasma'
        this.precio = 15000
        this.emoji = '<:ghostd:761189113822969857>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Fantasma.'
    }
}

module.exports = new Item()