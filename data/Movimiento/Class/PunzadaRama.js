const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Punzada Rama'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Planta
        this.potencia = 50
        this.precision = 100
        this.move_z = Cristal.get('fitostal z')
    }
}

module.exports = new Movimiento()