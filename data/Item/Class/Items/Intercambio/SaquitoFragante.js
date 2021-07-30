const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Saquito Fragante'
        this.emoji = '<:sachet:744677339258028093>'
        this.descripcion = 'Equípaselo a Spritzee antes de intercambiarlo para que evolucione en Aromatisse.'
    }
}

module.exports = new Objeto()