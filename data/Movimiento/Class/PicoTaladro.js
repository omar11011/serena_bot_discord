const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Pico Taladro'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Volador
        this.potencia = 80
        this.precision = 100
        this.move_z = Cristal.get('aerostal z')
    }
}

module.exports = new Movimiento()