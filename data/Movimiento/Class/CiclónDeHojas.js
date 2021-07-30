const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Ciclón de Hojas'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Planta
        this.potencia = 65
        this.precision = 90
        this.move_z = Cristal.get('fitostal z')
    }
}

module.exports = new Movimiento()