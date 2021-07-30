const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Electrizador'
        this.emoji = '<:electirizer:744677328705159230>'
        this.descripcion = 'Equípaselo a Electabuzz antes de intercambiarlo para que evolucione en Electivire.'
    }
}

module.exports = new Objeto()