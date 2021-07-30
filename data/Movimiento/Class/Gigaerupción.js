const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Gigaerupción'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Fuego
        this.potencia = 200
        this.precision = 30
        this.move_z = Cristal.get('pirostal z')
    }
}

module.exports = new Movimiento()