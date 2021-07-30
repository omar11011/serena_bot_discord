const Base = require('../Zygarde').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Zygarde al 10%'
        this.peso = 33.5
        this.altura = 1.2
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Zygarde', null, 70),
        ]
        this.stats = {
            hp: 54,
            attack: 100,
            defense: 71,
            spattack: 61,
            spdefense: 85,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}