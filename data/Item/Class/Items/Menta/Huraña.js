const Base = require('../../Tipos/Menta')

class Menta extends Base {
    constructor() {
        super()

        this.nombre = 'Menta Huraña'
        this.emoji = '<:mintred:760056649368731658>'
        this.descripcion = 'Aumenta ataque y baja la defensa de tu Pokémon.'
    }
}

module.exports = new Menta()