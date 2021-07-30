const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Cháchara'
        this.concurso = Concurso.Dulzura
        this.tipo = Tipo.Volador
        this.potencia = 65
        this.precision = 100
        this.move_z = Cristal.get('aerostal z')
    }
}

module.exports = new Movimiento()