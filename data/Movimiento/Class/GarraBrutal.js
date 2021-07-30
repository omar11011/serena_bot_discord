
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Garra Brutal'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Normal
        this.potencia = 75
        this.precision = 95
        this.move_z = Cristal.get('normastal z')
    }
}

module.exports = new Movimiento()