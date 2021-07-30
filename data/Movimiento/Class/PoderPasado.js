
const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Poder Pasado'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Roca
        this.potencia = 60
        this.precision = 100
        this.move_z = Cristal.get('litostal z')
    }
}

module.exports = new Movimiento()