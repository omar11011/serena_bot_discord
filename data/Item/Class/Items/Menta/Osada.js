const Base = require('../../Tipos/Menta')

class Menta extends Base {
    constructor() {
        super()

        this.nombre = 'Menta Osada'
        this.emoji = '<:mintblue:760056674924494858>'
        this.descripcion = 'Aumenta la defensa y baja el ataque de tu Pokémon.'
    }
}

module.exports = new Menta()