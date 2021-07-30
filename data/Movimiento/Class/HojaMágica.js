
const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Hoja Mágica'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Planta
        this.potencia = 60
        this.precision = 90
        this.move_z = Cristal.get('fitostal z')
    }
}

module.exports = new Movimiento()