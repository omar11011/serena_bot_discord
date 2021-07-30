const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Siniestro'
        this.precio = 15000
        this.emoji = '<:darkd:761189113939886090>'
        this.descripcion = 'Equípaselo a Silvally para que pueda cambiar su tipo a Siniestro.'
    }
}

module.exports = new Item()