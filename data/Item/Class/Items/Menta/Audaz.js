const Base = require('../../Tipos/Menta')

class Menta extends Base {
    constructor() {
        super()

        this.nombre = 'Menta Audaz'
        this.emoji = '<:mintred:760056649368731658>'
        this.descripcion = 'Aumenta el ataque y baja la velocidad de tu Pokémon.'
    }
}

module.exports = new Menta()