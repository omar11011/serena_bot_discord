const Base = require('../Xerneas').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Xerneas'
        this.tipo = [
            Entidades.Tipo.Hada,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 225
        this.altura = 3.5
        this.evolucion = []
        this.stats = {
            hp: 126,
            attack: 151,
            defense: 105,
            spattack: 151,
            spdefense: 108,
            speed: 111,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}