const Base = require('../../Tipos/PiedraEvolutiva')

class Piedra extends Base {
    constructor() {
        super()

        this.nombre = 'Piedra Día'
        this.emoji = '<:day_stone:732357739917082704>'
        this.descripcion = 'Piedra necesaria para evolucionar a los siguientes Pokémon: Roselia, Togetic, Minccino, Floette.'
    }
}

module.exports = new Piedra()