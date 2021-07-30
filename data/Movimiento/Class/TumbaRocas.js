
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Tumba Rocas'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Roca
        this.potencia = 60
        this.precision = 95
        this.move_z = Cristal.get('litostal z')
    }
}

module.exports = new Movimiento()