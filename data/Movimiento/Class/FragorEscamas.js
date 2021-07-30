
const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Fragor Escamas'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Dragón
        this.potencia = 110
        this.precision = 100
        this.move_z = Cristal.get('kommostal z')
    }
}

module.exports = new Movimiento()