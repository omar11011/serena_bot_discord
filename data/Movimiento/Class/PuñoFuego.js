
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Puño Fuego'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Fuego
        this.potencia = 75
        this.precision = 100
        this.move_z = Cristal.get('pirostal z')
    }
}

module.exports = new Movimiento()