const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Mirada Heladora'
        this.concurso = Concurso.Dulzura
        this.tipo = Tipo.Psíquico
        this.potencia = 70
        this.precision = 100
        this.move_z = Cristal.get('psicostal z')
    }
}

module.exports = new Movimiento()