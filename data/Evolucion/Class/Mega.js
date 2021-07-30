const Base = require('../Base')

class Mega extends Base {
    constructor(evolucion, item) {
        super(evolucion)

        this.tipo = 'Mega'
        this.item = item

        this.message = () => {
            return 'Megaevoluciona en ' + this.evolucion + ' usando ' + this.item.nombre + '.'
        }
    }
}

module.exports = Mega