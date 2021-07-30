const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Amago'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Normal
        this.potencia = 30
        this.precision = 100
        this.move_z = Cristal.get('normastal z')
    }
}

module.exports = new Movimiento()