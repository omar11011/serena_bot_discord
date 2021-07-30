const Base = require('../../Tipos/ItemEvolutivo')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Néctar Rojo'
        this.emoji = '<:rednectar:761151599749365760>'
        this.descripcion = 'Equípaselo a Oricorio para que pueda cambiar a su forma Apasionada.'
    }
}

module.exports = new Item()