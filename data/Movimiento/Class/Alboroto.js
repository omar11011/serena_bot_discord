const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Alboroto'
        this.concurso = Concurso.Dulzura
        this.tipo = Tipo.Normal
        this.potencia = 90
        this.precision = 100
        this.move_z = Cristal.get('normastal z')
    }
}

module.exports = new Movimiento()