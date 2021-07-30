
const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Pulso Umbrío'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Siniestro
        this.potencia = 80
        this.precision = 100
        this.move_z = Cristal.get('nictostal z')
    }
}

module.exports = new Movimiento()