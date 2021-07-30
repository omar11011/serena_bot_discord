const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Gigadesgaste'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Dragón
        this.potencia = 160
        this.precision = 50
        this.move_z = Cristal.get('dracostal z')
    }
}

module.exports = new Movimiento()