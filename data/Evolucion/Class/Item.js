const Base = require('../Base')

class Item extends Base {
    constructor(evolucion, item, hembra = null, dia = null) {
        super(evolucion)

        this.tipo = 'Item'
        this.item = item
        this.hembra = hembra
        this.dia = dia

        this.message = () => {
            let msg = 'Evoluciona en ' + this.evolucion + ' al usar ' + this.item.nombre

            if(this.hembra == null && this.dia == null) msg += '.'
            else {
                if(this.hembra == null) {
                    if(this.dia) msg += ' y sólo si es de día.'
                    else msg += ' y sólo si es de noche.'
                } else {
                    if(this.hembra) {
                        if(this.dia == null) msg += ' y sólo si es hembra.'
                        else {
                            if(this.dia) msg += ', debe ser hembra y ser de día.'
                            else msg += 'debe ser hembra y ser de noche.'
                        }
                    } else {
                        if(this.dia == null) msg += ' y sólo si es macho.'
                        else {
                            if(this.dia) msg += ', debe ser macho y ser de día.'
                            else msg += 'debe ser macho y ser de noche.'
                        }
                    }
                }
            }

            return msg
        }
    }
}

module.exports = Item