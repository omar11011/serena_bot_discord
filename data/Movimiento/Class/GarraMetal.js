const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Garra Metal'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Acero
        this.potencia = 50
        this.precision = 95
        this.move_z = Cristal.get('metalostal z')
    }
}

module.exports = new Movimiento()