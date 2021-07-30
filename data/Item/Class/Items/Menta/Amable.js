const Base = require('../../Tipos/Menta')

class Menta extends Base {
    constructor() {
        super()

        this.nombre = 'Menta Amable'
        this.emoji = '<:mintpink:761168533551317012>'
        this.descripcion = 'Aumenta la defensa especial y baja la defensa de tu Pokémon.'
    }
}

module.exports = new Menta()