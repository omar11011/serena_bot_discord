const Base = require('../../Tipos/Menta')

class Menta extends Base {
    constructor() {
        super()

        this.nombre = 'Menta Seria'
        this.emoji = '<:mintyellow:760056736471842816>'
        this.descripcion = 'No tiene efecto en ninguna estadística de tu Pokémon.'
    }
}

module.exports = new Menta()