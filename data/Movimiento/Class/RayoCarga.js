
const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Rayo Carga'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Eléctrico
        this.potencia = 50
        this.precision = 90
        this.move_z = Cristal.get('electrostal z')
    }
}

module.exports = new Movimiento()