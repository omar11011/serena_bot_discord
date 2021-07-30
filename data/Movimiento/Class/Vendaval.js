const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Vendaval'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Volador
        this.potencia = 110
        this.precision = 70
        this.move_z = Cristal.get('aerostal z')
    }
}

module.exports = new Movimiento()