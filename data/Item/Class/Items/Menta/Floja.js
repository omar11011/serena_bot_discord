const Base = require('../../Tipos/Menta')

class Menta extends Base {
    constructor() {
        super()

        this.nombre = 'Menta Floja'
        this.emoji = '<:mintblue:760056674924494858>'
        this.descripcion = 'Aumenta la defensa y baja la defensa especial de tu Pokémon.'
    }
}

module.exports = new Menta()