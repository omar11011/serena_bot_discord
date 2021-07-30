
const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Estoicismo'
        this.concurso = Concurso.Dulzura
        this.tipo = Tipo.Bicho
        this.potencia = 50
        this.precision = 100
        this.move_z = Cristal.get('insectostal z')
    }
}

module.exports = new Movimiento()