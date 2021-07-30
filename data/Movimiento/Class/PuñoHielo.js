
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Puño Hielo'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Hielo
        this.potencia = 75
        this.precision = 100
        this.move_z = Cristal.get('criostal z')
    }
}

module.exports = new Movimiento()