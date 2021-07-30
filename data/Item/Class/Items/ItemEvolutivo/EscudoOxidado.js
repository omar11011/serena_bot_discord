const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Escudo Oxidado'
        this.precio = 130000
        this.emoji = '<:shieldzama:762976888079122433>'
        this.descripcion = 'Equípaselo a Zamazenta para que pueda cambiar a su forma Escudo Supremo.'
    }
}

module.exports = new Item()