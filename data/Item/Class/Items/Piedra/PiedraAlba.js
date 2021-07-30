const Base = require('../../Tipos/PiedraEvolutiva')

class Piedra extends Base {
    constructor() {
        super()

        this.nombre = 'Piedra Alba'
        this.emoji = '<:alba_stone:732357739803836529>'
        this.descripcion = 'Piedra necesaria para evolucionar a los siguientes Pokémon: Kirlia, Snorunt.'
    }
}

module.exports = new Piedra()