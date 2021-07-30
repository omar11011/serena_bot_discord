const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Magmatizador'
        this.emoji = '<:magmarizer:744677330089148479>'
        this.descripcion = 'Equípaselo a Magmar antes de intercambiarlo para que evolucione en Magmortar.'
    }
}

module.exports = new Objeto()