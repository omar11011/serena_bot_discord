const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Gigamelodía'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Hielo
        this.potencia = 160
        this.precision = 50
        this.move_z = Cristal.get('criostal z')
    }
}

module.exports = new Movimiento()