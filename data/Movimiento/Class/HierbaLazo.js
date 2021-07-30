const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Hierba Lazo'
        this.concurso = Concurso.Dulzura
        this.tipo = Tipo.Planta
        this.potencia = 60
        this.precision = 100
        this.move_z = Cristal.get('fitostal z')
    }
}

module.exports = new Movimiento()