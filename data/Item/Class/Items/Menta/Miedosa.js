const Base = require('../../Tipos/Menta')

class Menta extends Base {
    constructor() {
        super()

        this.nombre = 'Menta Miedosa'
        this.emoji = '<:mintgreen:760056716527271936>'
        this.descripcion = 'Aumenta la velocidad y baja el ataque de tu Pokémon.'
    }
}

module.exports = new Menta()