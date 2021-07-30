const Base = require('../../Tipos/Menta')

class Menta extends Base {
    constructor() {
        super()

        this.nombre = 'Menta Firme'
        this.emoji = '<:mintred:760056649368731658>'
        this.descripcion = 'Aumenta el ataque y baja el ataque especial de tu Pokémon.'
    }
}

module.exports = new Menta()