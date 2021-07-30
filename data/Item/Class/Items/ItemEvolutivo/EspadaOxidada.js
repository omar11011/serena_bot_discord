const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Espada Oxidada'
        this.precio = 130000
        this.emoji = '<:swordzacian:762976873318711326>'
        this.descripcion = 'Equípaselo a Zacian para que pueda cambiar a su forma Espada Suprema.'
    }
}

module.exports = new Item()