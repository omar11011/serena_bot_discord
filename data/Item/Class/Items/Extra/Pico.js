const Base = require('../../Tipos/Extra')

class Extra extends Base {
    constructor() {
        super()

        this.tipo = 'Pico'
        this.nombre = 'Pico'
        this.precio = 300
        this.transferible = false
        this.uses = 10
        this.descripcion = `Objeto necesario para minar y encontrar recompensas. Puedes usarlo ${this.usos} veces.`

        this.min = 0
        this.max = 1000
    }
}

module.exports = new Extra()