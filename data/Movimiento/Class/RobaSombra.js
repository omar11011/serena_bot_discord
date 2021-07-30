const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Roba Sombra'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Fantasma
        this.potencia = 90
        this.precision = 100
        this.move_z = Cristal.get('marshastal z')
    }
}

module.exports = new Movimiento()