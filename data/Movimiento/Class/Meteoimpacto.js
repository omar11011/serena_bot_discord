const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Meteoimpacto'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Acero
        this.potencia = 100
        this.precision = 100
        this.move_z = Cristal.get('solgaleostal z')
    }
}

module.exports = new Movimiento()