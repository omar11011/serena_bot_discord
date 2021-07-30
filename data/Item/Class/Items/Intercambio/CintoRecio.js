const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Cinto Recio'
        this.emoji = ''
        this.descripcion = 'Hereda la defensa de tu pokémon en la crianza.'
    }
}

module.exports = new Objeto()