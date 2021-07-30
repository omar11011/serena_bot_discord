const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Conjuro Funesto'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Psíquico
        this.potencia = 80
        this.precision = 100
        this.move_z = Cristal.get('psicostal z')
    }
}

module.exports = new Movimiento()