
const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Polución'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Veneno
        this.potencia = 30
        this.precision = 70
        this.move_z = Cristal.get('toxistal z')
    }
}

module.exports = new Movimiento()