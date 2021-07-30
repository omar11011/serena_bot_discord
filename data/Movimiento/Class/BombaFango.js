const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Bomba Fango'
        this.concurso = Concurso.Dulzura
        this.tipo = Tipo.Tierra
        this.potencia = 65
        this.precision = 85
        this.move_z = Cristal.get('geostal z')
    }
}

module.exports = new Movimiento()