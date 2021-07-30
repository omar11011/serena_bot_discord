
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Puño Sombra'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Fantasma
        this.potencia = 60
        this.precision = 80
        this.move_z = Cristal.get('espectrostal z')
    }
}

module.exports = new Movimiento()