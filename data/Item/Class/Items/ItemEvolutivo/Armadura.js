const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Armadura'
        this.precio = 50000
        this.emoji = ''
        this.descripcion = 'Equípaselo a Mewtwo para que pueda convertirse en su forma Acorazada.'
    }
}

module.exports = new Item()