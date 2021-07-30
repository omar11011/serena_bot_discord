const Base = require('../Mewtwo').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Mewtwo X'
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 127
        this.altura = 2.3
        this.evolucion = []
        this.stats = {
            hp: 106,
            attack: 190,
            defense: 100,
            spattack: 154,
            spdefense: 100,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}