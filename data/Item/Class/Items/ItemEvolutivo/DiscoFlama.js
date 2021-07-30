const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Flama'
        this.precio = 15000
        this.emoji = '<:fired:761189113596215319>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Fuego.'
    }
}

module.exports = new Item()