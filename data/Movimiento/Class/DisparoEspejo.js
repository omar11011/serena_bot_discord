const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Disparo Espejo'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Acero
        this.potencia = 65
        this.precision = 85
        this.move_z = Cristal.get('metalostal z')
    }
}

module.exports = new Movimiento()