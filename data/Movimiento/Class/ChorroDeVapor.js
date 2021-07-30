const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Chorro de Vapor'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Agua
        this.potencia = 110
        this.precision = 95
        this.move_z = Cristal.get('hidrostal z')
    }
}

module.exports = new Movimiento()