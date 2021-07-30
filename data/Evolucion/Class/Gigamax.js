const Base = require('../Base')

class Gigamax extends Base {
    constructor(evolucion) {
        super(evolucion)

        this.tipo = 'Gigamax'

        this.message = () => {
            return 'Forma Gigamax: ' + this.evolucion
        }
    }
}

module.exports = Gigamax