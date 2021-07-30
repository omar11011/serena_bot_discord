const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Tajo Aéreo'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Volador
        this.potencia = 75
        this.precision = 95
        this.move_z = Cristal.get('aerostal z')
    }
}

module.exports = new Movimiento()