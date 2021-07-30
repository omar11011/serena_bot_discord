const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Brazal Recio'
        this.emoji = ''
        this.descripcion = 'Hereda el ataque de tu pokémon en la crianza.'
    }
}

module.exports = new Objeto()