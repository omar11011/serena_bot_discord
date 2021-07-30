const Base = require('../Togepi').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.spawn = false
        this.redeem = true
        this.pokemon = 'Chocopi'
        this.region = Entidades.Region.Johto
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Chocotic'),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}