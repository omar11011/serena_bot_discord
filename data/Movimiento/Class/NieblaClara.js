
const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Niebla Clara'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Veneno
        this.potencia = 50
        this.precision = 90
        this.move_z = Cristal.get('toxistal z')
    }
}

module.exports = new Movimiento()