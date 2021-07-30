const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Electro Jaula'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Eléctrico
        this.potencia = 80
        this.precision = 90
        this.move_z = Cristal.get('electrostal z')
    }
}

module.exports = new Movimiento()