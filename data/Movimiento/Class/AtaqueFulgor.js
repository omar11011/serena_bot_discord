const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Ataque Fulgor'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Eléctrico
        this.potencia = 130
        this.precision = 85
        this.move_z = Cristal.get('electrostal z')
    }
}

module.exports = new Movimiento()