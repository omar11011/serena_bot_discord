const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Cuchara Torcida'
        this.emoji = '<:twisted_spoon:744680162796240931>'
        this.descripcion = 'Equípaselo a Kadabra antes de intercambiarlo para que evolucione en Alakazam.'
    }
}

module.exports = new Objeto()