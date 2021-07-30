const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Ataque Óseo'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Tierra
        this.potencia = 40
        this.precision = 90
        this.move_z = Cristal.get('geostal z')
    }
}

module.exports = new Movimiento()