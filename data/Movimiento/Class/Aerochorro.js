const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Aerochorro'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Volador
        this.potencia = 100
        this.precision = 95
        this.move_z = Cristal.get('aerostal z')
    }
}

module.exports = new Movimiento()