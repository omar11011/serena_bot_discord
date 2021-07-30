const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Mundo Gélido'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Hielo
        this.potencia = 65
        this.precision = 95
        this.move_z = Cristal.get('criostal z')
    }
}

module.exports = new Movimiento()