const Base = require('../../Tipos/Menta')

class Menta extends Base {
    constructor() {
        super()

        this.nombre = 'Menta Serena'
        this.emoji = '<:mintpink:761168533551317012>'
        this.descripcion = 'Aumenta la defensa especial y baja el ataque de tu Pokémon.'
    }
}

module.exports = new Menta()