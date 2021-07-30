
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Mazazo'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Planta
        this.potencia = 120
        this.precision = 100
        this.move_z = Cristal.get('fitostal z')
    }
}

module.exports = new Movimiento()