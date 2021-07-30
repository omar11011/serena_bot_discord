const Base = require('../../Tipos/Menta')

class Menta extends Base {
    constructor() {
        super()

        this.nombre = 'Menta Plácida'
        this.emoji = '<:mintblue:760056674924494858>'
        this.descripcion = 'Aumenta la defensa y baja la velocidad de tu Pokémon.'
    }
}

module.exports = new Menta()