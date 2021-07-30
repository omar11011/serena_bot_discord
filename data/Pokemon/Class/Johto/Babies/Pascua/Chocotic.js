const Base = require('../Togetic').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.spawn = false
        this.redeem = true
        this.pokemon = 'Chocotic'
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Chocokiss', 400),
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}