const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Pulso Noche'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Siniestro
        this.potencia = 85
        this.precision = 90
        this.move_z = Cristal.get('nictostal z')
    }
}

module.exports = new Movimiento()