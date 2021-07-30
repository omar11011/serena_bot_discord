const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Escama Marina'
        this.emoji = '<:sea_scale:744677339744436296>'
        this.descripcion = 'Equípaselo a Clamperl antes de intercambiarlo para que evolucione en Gorebyss.'
    }
}

module.exports = new Objeto()