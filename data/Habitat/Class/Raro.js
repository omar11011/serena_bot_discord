const Base = require('../Base')

class Raro extends Base {
    constructor() {
        super()

        this.nombre = 'Raro'
        this.descripcion = 'Todos los Pokémon son Pokémon legendarios (excepto Unown), por lo que son muy raramente vistos.'
    }
}

module.exports = new Raro()