const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Carantoña'
        this.concurso = Concurso.Dulzura
        this.tipo = Tipo.Hada
        this.potencia = 90
        this.precision = 90
        this.move_z = Cristal.get('feeristal z')
    }
}

module.exports = new Movimiento()