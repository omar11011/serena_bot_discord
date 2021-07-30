const Base = require('../../Tipos/PiedraEvolutiva')

class Piedra extends Base {
    constructor() {
        super()

        this.nombre = 'Piedra Agua'
        this.emoji = '<:water_stone:732357741401866262>'
        this.descripcion = 'Piedra necesaria para evolucionar a los siguientes Pokémon: Poliwhirl, Shellder, Staryu, Eevee, Lombre, Panpour.'
    }
}

module.exports = new Piedra()