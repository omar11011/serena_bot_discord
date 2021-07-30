const Base = require('../../Tipos/PiedraEvolutiva')

class Piedra extends Base {
    constructor() {
        super()

        this.nombre = 'Piedra Lunar'
        this.emoji = '<:moon_stone:732357740655280130>'
        this.descripcion = 'Piedra necesaria para evolucionar a los siguientes Pokémon: Nidorina, Nodorino, Clefairy, Jigglypuff, Skitty, Munna.'
    }
}

module.exports = new Piedra()