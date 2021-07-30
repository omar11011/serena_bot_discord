const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Néctar Rosa'
        this.emoji = '<:pinknectar:761151636277166082>'
        this.descripcion = 'Equípaselo a Oricorio para que pueda cambiar a su forma Plácida.'
    }
}

module.exports = new Item()