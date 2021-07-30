const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Irreverencia'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Siniestro
        this.potencia = 80
        this.precision = 80
        this.move_z = Cristal.get('nictostal z')
    }
}

module.exports = new Movimiento()