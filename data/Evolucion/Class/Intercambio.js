const Base = require('../Base')

class Intercambio extends Base {
    constructor(evolucion, item = false) {
        super(evolucion)

        this.tipo = 'Intercambio'
        this.item = item

        this.message = () => {
            let msg = 'Evoluciona en ' + this.evolucion + ' al ser intercambiado'

            if(!item) msg += '.'
            else msg += ' equipando ' + this.item.nombre + '.'

            return msg
        }
    }
}

module.exports = Intercambio