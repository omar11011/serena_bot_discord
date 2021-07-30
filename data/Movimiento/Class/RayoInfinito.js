const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Rayo Infinito'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Dragón
        this.potencia = 160
        this.precision = 90
        this.move_z = Cristal.get('dracostal z')
    }
}

module.exports = new Movimiento()