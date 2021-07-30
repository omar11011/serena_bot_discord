const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Mejora'
        this.emoji = '<:upgrade:744677340893937725>'
        this.descripcion = 'Equípaselo a Porygon antes de intercambiarlo para que evolucione en Porygon2.'
    }
}

module.exports = new Objeto()