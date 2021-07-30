const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Hada'
        this.precio = 15000
        this.emoji = '<:fairyd:761189113961119778>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Hada.'
    }
}

module.exports = new Item()