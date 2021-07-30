const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Gigamachada'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Lucha
        this.potencia = 200
        this.precision = 30
        this.move_z = Cristal.get('lizastal z')
    }
}

module.exports = new Movimiento()