const Base = require('../Charizard').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Charizard X'
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Dragón,
        ]
        this.peso = 110.5
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.stats = {
            hp: 78,
            attack: 130,
            defense: 111,
            spattack: 130,
            spdefense: 85,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}