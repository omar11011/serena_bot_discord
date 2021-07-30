
const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Lluevehojas'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Planta
        this.potencia = 130
        this.precision = 90
        this.move_z = Cristal.get('fitostal z')
    }
}

module.exports = new Movimiento()