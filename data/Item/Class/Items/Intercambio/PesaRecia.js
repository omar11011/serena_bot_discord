const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Pesa Recia'
        this.emoji = ''
        this.descripcion = 'Hereda la salud de tu pokémon en la crianza.'
    }
}

module.exports = new Objeto()