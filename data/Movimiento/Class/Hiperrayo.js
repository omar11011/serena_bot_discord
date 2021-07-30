const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Hiperrayo'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Normal
        this.potencia = 150
        this.precision = 90
        this.move_z = Cristal.get('normastal z')
    }
}

module.exports = new Movimiento()