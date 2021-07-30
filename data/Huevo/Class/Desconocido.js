const Base = require('../Base')

class Desconocido extends Base {
    constructor() {
        super()

        this.nombre = 'Desconocido'
    }
}

module.exports = new Desconocido()