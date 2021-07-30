
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Fuerza Equina'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Tierra
        this.potencia = 95
        this.precision = 95
        this.move_z = Cristal.get('geostal z')
    }
}

module.exports = new Movimiento()