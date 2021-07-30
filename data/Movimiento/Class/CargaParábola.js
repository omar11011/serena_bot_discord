const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Carga Parábola'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Eléctrico
        this.potencia = 65
        this.precision = 100
        this.move_z = Cristal.get('electrostal z')
    }
}

module.exports = new Movimiento()