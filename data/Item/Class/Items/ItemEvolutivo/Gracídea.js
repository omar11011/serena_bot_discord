const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Gracídea'
        this.precio = 150
        this.emoji = '<:gracidea:761161148337750016>'
        this.descripcion = 'Equípaselo a Shaymin para que pueda pueda convertirse en su forma Cielo.'
    }
}

module.exports = new Item()