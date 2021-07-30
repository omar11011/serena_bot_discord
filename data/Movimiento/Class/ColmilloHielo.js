const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Colmillo Hielo'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Hielo
        this.potencia = 65
        this.precision = 95
        this.move_z = Cristal.get('criostal z')
    }
}

module.exports = new Movimiento()