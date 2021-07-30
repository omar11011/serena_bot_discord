
const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Procrastinar'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Hada
        this.potencia = 250
        this.precision = 30
        this.move_z = Cristal.get('feeristal z')
    }
}

module.exports = new Movimiento()