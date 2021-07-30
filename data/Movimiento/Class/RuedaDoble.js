
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Rueda Doble'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Acero
        this.potencia = 70
        this.precision = 85
        this.move_z = Cristal.get('metalostal z')
    }
}

module.exports = new Movimiento()