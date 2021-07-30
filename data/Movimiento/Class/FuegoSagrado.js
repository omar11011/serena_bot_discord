
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Fuego Sagrado'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Fuego
        this.potencia = 100
        this.precision = 95
        this.move_z = Cristal.get('pirostal z')
    }
}

module.exports = new Movimiento()