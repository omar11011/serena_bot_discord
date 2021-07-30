
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Llave Corsé'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Lucha
        this.potencia = 80
        this.precision = 60
        this.move_z = Cristal.get('lizastal z')
    }
}

module.exports = new Movimiento()