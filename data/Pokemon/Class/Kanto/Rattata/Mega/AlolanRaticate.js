const Base = require('../Raticate').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.spawn = false
        this.pokemon = 'Mega Raticate de Alola'
        this.peso = 55.5
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.stats = {
            hp: 75,
            attack: 91,
            defense: 60,
            spattack: 60,
            spdefense: 85,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}