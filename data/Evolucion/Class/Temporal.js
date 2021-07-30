const Base = require('../Base')

class Temporal extends Base {
    constructor(evolucion, item = false, level = 1) {
        super(evolucion)

        this.tipo = 'Temporal'
        this.item = item
        this.level = level

        this.message = () => {
            let msg = 'Se transforma en ' + this.evolucion + ' durante combate'

            if(this.level == 1) {
                if(!item) msg += '.'
                else msg += ' utilizando ' + this.item.nombre + '.'
            } else {
                if(!item) msg += ' a partir del nivel ' + this.level + '.'
                else msg += ' a partir del nivel ' + this.level + ', utilizando ' + this.item.nombre + '.'
            }

            return msg
        }
    }
}

module.exports = Temporal