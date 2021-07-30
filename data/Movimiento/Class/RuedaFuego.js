
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Rueda Fuego'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Fuego
        this.potencia = 60
        this.precision = 100
        this.move_z = Cristal.get('pirostal z')
    }
}

module.exports = new Movimiento()