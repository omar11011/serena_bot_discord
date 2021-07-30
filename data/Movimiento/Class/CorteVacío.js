const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Corte Vacío'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Dragón
        this.potencia = 100
        this.precision = 95
        this.move_z = Cristal.get('dracostal z')
    }
}

module.exports = new Movimiento()