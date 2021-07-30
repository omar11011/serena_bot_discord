const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Gigapuñición'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Lucha
        this.potencia = 160
        this.precision = 50
        this.move_z = Cristal.get('lizastal z')
    }
}

module.exports = new Movimiento()