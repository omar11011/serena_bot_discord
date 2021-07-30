const Base = require('../../Tipos/Extra')

class Extra extends Base {
    constructor() {
        super()

        this.tipo = 'Pico'
        this.nombre = 'Pico Experto'
        this.precio = 500
        this.metodo = 'Gemas'
        this.transferible = false
        this.uses = 8
        this.descripcion = `Potencia tu probabilidad de encontrar mejores objetos minando. Puedes usarlo ${this.usos} veces.`

        this.min = 1000
        this.max = 50000
    }
}

module.exports = new Extra()