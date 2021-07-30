const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Llama Azul'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Fuego
        this.potencia = 130
        this.precision = 85
        this.move_z = Cristal.get('pirostal z')
    }
}

module.exports = new Movimiento()