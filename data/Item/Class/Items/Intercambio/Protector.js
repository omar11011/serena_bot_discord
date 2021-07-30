const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Protector'
        this.emoji = '<:protector:744677337659867198>'
        this.descripcion = 'Equípaselo a Rhydon antes de intercambiarlo para que evolucione en Rhyperior.'
    }
}

module.exports = new Objeto()