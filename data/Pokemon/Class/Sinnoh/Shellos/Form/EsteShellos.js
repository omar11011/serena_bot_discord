const Base = require('../Shellos').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Shellos del Este'
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Gastrodon del Este', 30),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}