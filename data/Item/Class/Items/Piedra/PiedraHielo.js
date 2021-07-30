const Base = require('../../Tipos/PiedraEvolutiva')

class Piedra extends Base {
    constructor() {
        super()

        this.nombre = 'Piedra Hielo'
        this.emoji = '<:ice_stone:732357740881641602>'
        this.descripcion = 'Piedra necesaria para evolucionar a los siguientes Pokémon: Alolan Vulpix, Alolan Sandshrew.'
    }
}

module.exports = new Piedra()