const Base = require('../Base')

class AguaDulce extends Base {
    constructor() {
        super()

        this.nombre = 'Agua Dulce'
        this.descripcion = 'Son, en su mayoría, Pokémon de tipo agua que viven en lagos o ríos.'
    }
}

module.exports = new AguaDulce()