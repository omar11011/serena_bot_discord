
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Golpe Kárate'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Lucha
        this.potencia = 50
        this.precision = 100
        this.move_z = Cristal.get('lizastal z')
    }
}

module.exports = new Movimiento()