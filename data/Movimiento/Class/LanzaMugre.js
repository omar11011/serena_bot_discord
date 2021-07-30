const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Lanza Mugre'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Veneno
        this.potencia = 120
        this.precision = 80
        this.move_z = Cristal.get('toxistal z')
    }
}

module.exports = new Movimiento()