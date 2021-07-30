const Base = require('../Lycanroc').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Lycanroc Nocturno'
        this.altura = 1.1
        this.color = Entidades.Color.Rojo
        this.stats = {
            hp: 85,
            attack: 115,
            defense: 75,
            spattack: 55,
            spdefense: 75,
            speed: 82,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}