const Base = require('../Riolu').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Riolu de Cristal'
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Lucario de Cristal'),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}