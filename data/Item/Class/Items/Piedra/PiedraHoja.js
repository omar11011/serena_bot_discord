const Base = require('../../Tipos/PiedraEvolutiva')

class Piedra extends Base {
    constructor() {
        super()

        this.nombre = 'Piedra Hoja'
        this.emoji = '<:leaf_stone:732357740902613012>'
        this.descripcion = 'Piedra necesaria para evolucionar a los siguientes Pokémon: Gloom, Weepinbell, Exeggcute, Nuzleaf, Pansage.'
    }
}

module.exports = new Piedra()