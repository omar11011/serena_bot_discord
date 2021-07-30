const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Cielo'
        this.precio = 15000
        this.emoji = '<:flyingd:761189113797410837>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Volador.'
    }
}

module.exports = new Item()