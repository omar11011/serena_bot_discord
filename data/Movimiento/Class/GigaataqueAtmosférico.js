const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Gigaataque Atmosférico'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Dragón
        this.potencia = 200
        this.precision = 30
        this.move_z = Cristal.get('dracostal z')
    }
}

module.exports = new Movimiento()