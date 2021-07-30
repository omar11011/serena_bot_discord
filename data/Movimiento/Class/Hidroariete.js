const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Hidroariete'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Agua
        this.potencia = 85
        this.precision = 100
        this.move_z = Cristal.get('hidrostal z')
    }
}

module.exports = new Movimiento()