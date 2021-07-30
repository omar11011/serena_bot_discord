const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Tifón Oscuro'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Oscuro
        this.potencia = 95
        this.precision = 100
        this.move_z = Cristal.get('oscuristal z')
    }
}

module.exports = new Movimiento()