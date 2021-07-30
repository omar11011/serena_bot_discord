const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Tormenta de Diamantes'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Roca
        this.potencia = 100
        this.precision = 95
        this.move_z = Cristal.get('litostal z')
    }
}

module.exports = new Movimiento()