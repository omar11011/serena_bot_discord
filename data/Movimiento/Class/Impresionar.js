
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Impresionar'
        this.concurso = Concurso.Dulzura
        this.tipo = Tipo.Fantasma
        this.potencia = 30
        this.precision = 100
        this.move_z = Cristal.get('espectrostal z')
    }
}

module.exports = new Movimiento()