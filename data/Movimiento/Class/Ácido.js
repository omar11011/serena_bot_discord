const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Ácido'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Veneno
        this.potencia = 40
        this.precision = 90
        this.move_z = Cristal.get('toxistal z')
    }
}

module.exports = new Movimiento()