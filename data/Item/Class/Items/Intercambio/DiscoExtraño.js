const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Disco Extraño'
        this.emoji = '<:discoextrano:807653537080934430>'
        this.descripcion = 'Equípaselo a Porygon2 antes de intercambiarlo para que evolucione en Porygon-Z.'
    }
}

module.exports = new Objeto()