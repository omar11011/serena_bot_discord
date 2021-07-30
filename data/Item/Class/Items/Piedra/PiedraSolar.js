const Base = require('../../Tipos/PiedraEvolutiva')

class Piedra extends Base {
    constructor() {
        super()

        this.nombre = 'Piedra Solar'
        this.emoji = '<:sun_stone:732357741301203146>'
        this.descripcion = 'Piedra necesaria para evolucionar a los siguientes Pokémon: Gloom, Sunkern, Cottonee, Petillil, Helioptile.'
    }
}

module.exports = new Piedra()