const Base = require('../Gastrodon').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Gastrodon del Oeste'
        this.evolucion = []
        this.color = Entidades.Color.Rosa
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}