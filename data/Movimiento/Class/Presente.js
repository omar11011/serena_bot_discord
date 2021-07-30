const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Presente'
        this.concurso = Concurso.Dulzura
        this.tipo = Tipo.Normal
        this.potencia = 65
        this.precision = 90
        this.move_z = Cristal.get('normastal z')
    }
}

module.exports = new Movimiento()