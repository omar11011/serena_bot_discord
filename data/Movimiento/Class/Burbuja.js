const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Burbuja'
        this.concurso = Concurso.Dulzura
        this.tipo = Tipo.Agua
        this.potencia = 40
        this.precision = 100
        this.move_z = Cristal.get('hidrostal z')
    }
}

module.exports = new Movimiento()