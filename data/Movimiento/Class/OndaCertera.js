const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Onda Certera'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Lucha
        this.potencia = 120
        this.precision = 70
        this.move_z = Cristal.get('lizastal z')
    }
}

module.exports = new Movimiento()