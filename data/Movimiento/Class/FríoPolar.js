
const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Frío Polar'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Hielo
        this.potencia = 250
        this.precision = 30
        this.move_z = Cristal.get('criostal z')
    }
}

module.exports = new Movimiento()