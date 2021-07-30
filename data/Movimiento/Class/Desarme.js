const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Desarme'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Siniestro
        this.potencia = 65
        this.precision = 100
        this.move_z = Cristal.get('nictostal z')
    }
}

module.exports = new Movimiento()