
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Puño Mareo'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Normal
        this.potencia = 70
        this.precision = 100
        this.move_z = Cristal.get('normastal z')
    }
}

module.exports = new Movimiento()