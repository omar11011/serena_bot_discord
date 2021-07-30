const Base = require('../Pikachu').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Pikachu Gorra Original'
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Pikachu Gigamax'),
        ]
        this.captura = 70
        this.stats = {
            hp: 45,
            attack: 80,
            defense: 50,
            spattack: 75,
            spdefense: 60,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}