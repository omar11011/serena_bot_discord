const Base = require('../../Tipos/Extra')

class Extra extends Base {
    constructor() {
        super()

        this.tipo = 'Pico'
        this.nombre = 'Pico Maestro'
        this.precio = 1500
        this.metodo = 'Gemas'
        this.transferible = false
        this.uses = 5
        this.descripcion = `Potencia tu probabilidad de encontrar mejores objetos minando. Puedes usarlo ${this.usos} veces.`

        this.min = 50000
        this.max = 500000
    }
}

module.exports = new Extra()