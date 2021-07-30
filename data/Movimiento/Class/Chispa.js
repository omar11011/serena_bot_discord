const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Chispa'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Eléctrico
        this.potencia = 65
        this.precision = 100
        this.move_z = Cristal.get('electrostal z')
    }
}

module.exports = new Movimiento()