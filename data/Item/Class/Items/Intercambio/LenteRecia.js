const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Lente Recia'
        this.emoji = ''
        this.descripcion = 'Hereda el ataque especial de tu pokémon en la crianza.'
    }
}

module.exports = new Objeto()