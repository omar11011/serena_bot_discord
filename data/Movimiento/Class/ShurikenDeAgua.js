
const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Shuriken de Agua'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Agua
        this.potencia = 75
        this.precision = 100
        this.move_z = Cristal.get('hidrostal z')
    }
}

module.exports = new Movimiento()