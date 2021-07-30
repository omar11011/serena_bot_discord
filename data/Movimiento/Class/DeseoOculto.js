const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Deseo Oculto'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Acero
        this.potencia = 140
        this.precision = 100
        this.move_z = Cristal.get('metalostal z')
    }
}

module.exports = new Movimiento()