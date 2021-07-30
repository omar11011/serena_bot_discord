const Base = require('../Lopunny').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Lopunny'
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 28.3
        this.altura = 1.3
        this.evolucion = []
        this.stats = {
            hp: 65,
            attack: 136,
            defense: 94,
            spattack: 54,
            spdefense: 96,
            speed: 135,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}