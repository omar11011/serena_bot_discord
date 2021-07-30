const Base = require('../Morpeko').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Morpeko Voraz'
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.stats = {
            hp: 63,
            attack: 100,
            defense: 58,
            spattack: 70,
            spdefense: 58,
            speed: 107,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}