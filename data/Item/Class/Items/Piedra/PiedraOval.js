const Base = require('../../Tipos/PiedraEvolutiva')

class Piedra extends Base {
    constructor() {
        super()

        this.nombre = 'Piedra Oval'
        this.emoji = '<:oval_stone:744677335487348806>'
        this.descripcion = 'Piedra necesaria para evolucionar a los siguientes Pokémon: Happiny.'
    }
}

module.exports = new Piedra()