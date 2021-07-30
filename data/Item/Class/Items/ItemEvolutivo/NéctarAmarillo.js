const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Néctar Amarillo'
        this.emoji = '<:yellownectar:761151654232850452>'
        this.descripcion = 'Equípaselo a Oricorio para que pueda cambiar a su forma Animada.'
    }
}

module.exports = new Item()