const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Electrocañón'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Eléctrico
        this.potencia = 120
        this.precision = 50
        this.move_z = Cristal.get('electrostal z')
    }
}

module.exports = new Movimiento()