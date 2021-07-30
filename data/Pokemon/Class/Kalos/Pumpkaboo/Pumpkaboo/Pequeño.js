const Base = require('../Pumpkaboo').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Pumpkaboo Pequeño'
        this.peso = 3.5
        this.altura = 0.3
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Gourgeist Pequeño'),
        ]
        this.stats = {
            hp: 44,
            attack: 66,
            defense: 70,
            spattack: 44,
            spdefense: 55,
            speed: 56,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}