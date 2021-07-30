const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Golpe Fantasma'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Fantasma
        this.potencia = 90
        this.precision = 100
        this.move_z = Cristal.get('espectrostal z')
    }
}

module.exports = new Movimiento()