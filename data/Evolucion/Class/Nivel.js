const Base = require('../Base')

class Nivel extends Base {
    constructor(evolucion, nivel, hembra = null) {
        super(evolucion)

        this.tipo = 'Nivel'
        this.nivel = nivel
        this.hembra = hembra

        this.message = () => {
            let msg = 'Evoluciona en ' + this.evolucion + ' al alcanzar el nivel ' + this.nivel

            if(this.hembra == null) msg += '.'
            else {
                if(this.hembra) msg += ' y sólo si es hembra.'
                else msg += ' y sólo si es macho.'
            }

            return msg
        }
    }
}

module.exports = Nivel