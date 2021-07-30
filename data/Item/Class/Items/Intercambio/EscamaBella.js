const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Escama Bella'
        this.emoji = '<:prism_scale:744677336661753926>'
        this.descripcion = 'Equípaselo a Feebas antes de intercambiarlo para que evolucione en Milotic.'
    }
}

module.exports = new Objeto()