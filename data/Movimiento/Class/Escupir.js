const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Escupir'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Normal
        this.potencia = 60
        this.precision = 90
        this.move_z = Cristal.get('normastal z')
    }
}

module.exports = new Movimiento()