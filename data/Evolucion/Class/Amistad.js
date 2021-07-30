const Base = require('../Base')

class Amistad extends Base {
    constructor(evolucion, amistad = 220, day = null) {
        super(evolucion)

        this.tipo = 'Amistad'
        this.amistad = amistad
        this.day = day

        this.message = () => {
            let msg = 'Evoluciona en ' + this.evolucion + ' al conseguir ' + this.amistad + ' puntos de amistad'

            if(this.day == null) msg += '.'
            else {
                if(this.day) msg += ' durante el día.'
                else msg += ' durante la noche.'
            }

            return msg
        }
    }
}

module.exports = Amistad