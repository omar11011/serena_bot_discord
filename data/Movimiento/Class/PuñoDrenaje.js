
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Puño Drenaje'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Lucha
        this.potencia = 75
        this.precision = 100
        this.move_z = Cristal.get('lizastal z')
    }
}

module.exports = new Movimiento()