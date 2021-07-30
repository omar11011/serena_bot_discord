const Base = require('../../Tipos/PiedraEvolutiva')

class Piedra extends Base {
    constructor() {
        super()

        this.nombre = 'Piedra Noche'
        this.emoji = '<:night_stone:732357741351272568>'
        this.descripcion = 'Piedra necesaria para evolucionar a los siguientes Pokémon: Murkrow, Misdreavus, Lampent, Doublade.'
    }
}

module.exports = new Piedra()