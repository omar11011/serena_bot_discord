const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Amnsiedad'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Psíquico
        this.potencia = 150
        this.precision = 70
        this.move_z = Cristal.get('psicostal z')
    }
}

module.exports = new Movimiento()