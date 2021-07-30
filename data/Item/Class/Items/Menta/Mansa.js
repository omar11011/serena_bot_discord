const Base = require('../../Tipos/Menta')

class Menta extends Base {
    constructor() {
        super()

        this.nombre = 'Menta Mansa'
        this.emoji = '<:mintcyan:760056695928913931>'
        this.descripcion = 'Aumenta el ataque espcial y baja la velocidad de tu Pokémon.'
    }
}

module.exports = new Menta()