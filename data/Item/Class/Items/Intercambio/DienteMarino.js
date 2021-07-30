const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Diente Marino'
        this.emoji = '<:sea_tooth:744677340151283812>'
        this.descripcion = 'Equípaselo a Clamperl antes de intercambiarlo para que evolucione en Huntail.'
    }
}

module.exports = new Objeto()