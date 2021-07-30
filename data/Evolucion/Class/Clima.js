const Base = require('../Base')

class Clima extends Base {
    constructor(evolucion, clima) {
        super(evolucion)

        this.tipo = 'Clima'
        this.clima = clima
    }
}

module.exports = Clima