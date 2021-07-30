const Base = require('../../Tipos/Extra')

class Extra extends Base {
    constructor() {
        super()

        this.nombre = 'Amuleto Iris'
        this.emoji = ''
        this.metodo = 'Gemas'
        this.precio = 7500
        this.equipable = true
        this.gastable = false
        this.descripcion = 'Incrementa tu posibilidad de obtener pokémon shinies en la crianza.'
    }
}

module.exports = new Extra()