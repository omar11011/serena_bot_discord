const Base = require('../Base')

class AguaSalada extends Base {
    constructor() {
        super()

        this.nombre = 'Agua Salada'
        this.descripcion = 'Son, en su mayoría, Pokémon de tipo agua que viven en la superficie del mar o en las profundidades.'
    }
}

module.exports = new AguaSalada()