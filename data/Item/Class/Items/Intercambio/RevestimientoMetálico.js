const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Revestimiento Metálico'
        this.emoji = '<:metal_coat:744677333046132867>'
        this.descripcion = 'Equípaselo a Onix o Scyther antes de intercambiarlo para que evolucione en Steelix o Scizor respectivamente.'
    }
}

module.exports = new Objeto()