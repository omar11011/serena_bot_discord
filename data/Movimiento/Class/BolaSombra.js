const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Bola Sombra'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Fantasma
        this.potencia = 80
        this.precision = 100
        this.move_z = Cristal.get('espectrostal z')
    }
}

module.exports = new Movimiento()