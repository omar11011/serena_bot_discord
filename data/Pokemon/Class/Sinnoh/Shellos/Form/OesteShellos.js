const Base = require('../Shellos').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Shellos del Oeste'
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Gastrodon del Oeste', 30),
        ]
        this.color = Entidades.Color.Rosa
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}