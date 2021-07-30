const Base = require('../Natu').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Natu de Saife'
        this.region = Entidades.Region.Saife
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Qatu', 18),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}