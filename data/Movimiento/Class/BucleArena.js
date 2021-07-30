const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Bucle Arena'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Tierra
        this.potencia = 35
        this.precision = 83
        this.move_z = Cristal.get('geostal z')
    }
}

module.exports = new Movimiento()