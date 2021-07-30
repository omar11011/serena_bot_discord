const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Franja Recia'
        this.emoji = ''
        this.descripcion = 'Hereda la velocidad de tu pokémon en la crianza.'
    }
}

module.exports = new Objeto()