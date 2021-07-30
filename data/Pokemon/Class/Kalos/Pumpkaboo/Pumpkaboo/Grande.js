const Base = require('../Pumpkaboo').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Pumpkaboo Grande'
        this.peso = 7.5
        this.altura = 0.5
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Gourgeist Grande'),
        ]
        this.stats = {
            hp: 54,
            attack: 66,
            defense: 70,
            spattack: 44,
            spdefense: 55,
            speed: 46,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}