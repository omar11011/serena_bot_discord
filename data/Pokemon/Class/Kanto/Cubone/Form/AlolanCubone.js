const Base = require('../Cubone').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Cubone de Alola'
        this.region = Entidades.Region.Alola
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Marowak de Alola', 28),
        ]
        this.captura = 190
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}