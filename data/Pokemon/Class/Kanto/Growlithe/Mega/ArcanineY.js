const Base = require('../Arcanine').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Arcanine Y'
        this.peso = 158
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Psíquico,
        ]
        this.evolucion = []
        this.stats = {
            hp: 110,
            attack: 120,
            defense: 85,
            spattack: 110,
            spdefense: 85,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}