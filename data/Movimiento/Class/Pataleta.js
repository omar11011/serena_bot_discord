
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Pataleta'
        this.concurso = Concurso.Dulzura
        this.tipo = Tipo.Tierra
        this.potencia = 75
        this.precision = 100
        this.move_z = Cristal.get('geostal z')
    }
}

module.exports = new Movimiento()