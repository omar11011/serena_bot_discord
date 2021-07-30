const Base = require('../Base')

class Movimiento extends Base {
    constructor(evolucion, movimiento) {
        super(evolucion)

        this.tipo = 'Movimiento'
        this.movimiento = movimiento

        this.message = () => {
            return 'Evoluciona en ' + this.evolucion + ' al aprender ' + this.movimiento.nombre + '.'
        }
    }
}

module.exports = Movimiento