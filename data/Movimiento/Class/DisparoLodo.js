const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Disparo Lodo'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Tierra
        this.potencia = 55
        this.precision = 95
        this.move_z = Cristal.get('geostal z')
    }
}

module.exports = new Movimiento()