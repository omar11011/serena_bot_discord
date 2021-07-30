const Base = require('../Latias').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Latias'
        this.peso = 52
        this.altura = 1.8
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.stats = {
            hp: 80,
            attack: 100,
            defense: 120,
            spattack: 140,
            spdefense: 150,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}