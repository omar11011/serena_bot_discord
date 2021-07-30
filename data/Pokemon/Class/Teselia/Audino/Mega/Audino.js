const Base = require('../Audino').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Audino'
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Hada,
        ]
        this.peso = 32
        this.altura = 1.5
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.stats = {
            hp: 103,
            attack: 60,
            defense: 126,
            spattack: 80,
            spdefense: 126,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}