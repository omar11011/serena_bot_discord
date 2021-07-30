const Base = require('../Lucario').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Lucario de Cristal'
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.stats = {
            hp: 70,
            attack: 130,
            defense: 70,
            spattack: 115,
            spdefense: 70,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}