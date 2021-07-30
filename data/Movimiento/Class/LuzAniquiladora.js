const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Luz Aniquiladora'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Hada
        this.potencia = 140
        this.precision = 90
        this.move_z = Cristal.get('feeristal z')
    }
}

module.exports = new Movimiento()