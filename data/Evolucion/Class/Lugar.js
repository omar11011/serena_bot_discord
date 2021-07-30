const Base = require('../Base')

class Lugar extends Base {
    constructor(evolucion, lugar) {
        super(evolucion)

        this.tipo = 'Lugar'
        this.lugar = lugar
    }
}

module.exports = Lugar