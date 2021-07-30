const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Escama Dragón'
        this.emoji = '<:dragon_scale:744677327631286472>'
        this.descripcion = 'Equípaselo a Seadra antes de intercambiarlo para que evolucione en Kingdra.'
    }
}

module.exports = new Objeto()