const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Riendas Unión'
        this.precio = 150000
        this.emoji = '<:riendas:769433743609692172>'
        this.descripcion = 'Equípaselo a Calyrex para que pueda convertirse en su forma Jinete.'
    }
}

module.exports = new Item()