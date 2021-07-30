const Base = require('../Arcanine').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Arcanine X'
        this.peso = 165
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Lucha,
        ]
        this.evolucion = []
        this.stats = {
            hp: 110,
            attack: 115,
            defense: 100,
            spattack: 105,
            spdefense: 100,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}