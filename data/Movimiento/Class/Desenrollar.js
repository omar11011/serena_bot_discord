const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Desenrollar'
        this.concurso = Concurso.Dulzura
        this.tipo = Tipo.Roca
        this.potencia = 40
        this.precision = 90
        this.move_z = Cristal.get('litostal z')
    }
}

module.exports = new Movimiento()