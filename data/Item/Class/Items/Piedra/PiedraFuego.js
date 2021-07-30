const Base = require('../../Tipos/PiedraEvolutiva')

class Piedra extends Base {
    constructor() {
        super()

        this.nombre = 'Piedra Fuego'
        this.emoji = '<:fire_stone:732357739686264843>'
        this.descripcion = 'Piedra necesaria para evolucionar a los siguientes Pokémon: Vulpix, Growlithe, Eevee, Pansear.'
    }
}

module.exports = new Piedra()