const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Dulce de Nata'
        this.emoji = '<:whipped_dream:744677340763652166>'
        this.descripcion = 'Equípaselo a Swirlix antes de intercambiarlo para que evolucione en Slurpuff.'
    }
}

module.exports = new Objeto()