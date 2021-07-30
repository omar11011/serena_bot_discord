const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Vigor Oscuro'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Oscuro
        this.potencia = 40
        this.precision = 100
        this.move_z = Cristal.get('oscuristal z')
    }
}

module.exports = new Movimiento()