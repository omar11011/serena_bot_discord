const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Rayo Fusión'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Eléctrico
        this.potencia = 100
        this.precision = 100
        this.move_z = Cristal.get('electrostal z')
    }
}

module.exports = new Movimiento()