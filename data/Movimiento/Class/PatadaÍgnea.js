
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Patada Ígnea'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Fuego
        this.potencia = 85
        this.precision = 90
        this.move_z = Cristal.get('pirostal z')
    }
}

module.exports = new Movimiento()