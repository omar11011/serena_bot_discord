const Base = require('../../Tipos/PiedraEvolutiva')

class Piedra extends Base {
    constructor() {
        super()

        this.nombre = 'Piedra Trueno'
        this.emoji = '<:thunder_stone:732357741028573256>'
        this.descripcion = 'Piedra necesaria para evolucionar a los siguientes Pokémon: Pikachu, Alolan Pikachu, Eevee, Eelektrik.'
    }
}

module.exports = new Piedra()