const Base = require('../Jirachi').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Jirachi'
        this.peso = 3
        this.altura = 0.7
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.stats = {
            hp: 120,
            attack: 110,
            defense: 120,
            spattack: 110,
            spdefense: 120,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}