const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Mente'
        this.precio = 15000
        this.emoji = '<:psychicd:761189113742360628>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Psíquico.'
    }
}

module.exports = new Item()