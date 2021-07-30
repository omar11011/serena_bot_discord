const Base = require('../Pumpkaboo').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Pumpkaboo Extragrande'
        this.peso = 15
        this.altura = 0.8
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Gourgeist Extragrande'),
        ]
        this.stats = {
            hp: 59,
            attack: 66,
            defense: 70,
            spattack: 44,
            spdefense: 55,
            speed: 41,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}