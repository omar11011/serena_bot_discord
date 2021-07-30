const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Cola Dragón'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Dragón
        this.potencia = 60
        this.precision = 90
        this.move_z = Cristal.get('dracostal z')
    }
}

module.exports = new Movimiento()