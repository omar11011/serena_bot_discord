const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Acua Cola'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Agua
        this.potencia = 90
        this.precision = 90
        this.move_z = Cristal.get('hidrostal z')
    }
}

module.exports = new Movimiento()