const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Doble Rayo'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Bicho
        this.potencia = 75
        this.precision = 100
        this.move_z = Cristal.get('insectostal z')
    }
}

module.exports = new Movimiento()