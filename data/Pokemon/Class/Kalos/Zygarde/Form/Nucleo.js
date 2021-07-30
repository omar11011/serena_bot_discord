const Base = require('../Zygarde').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Núcleo de Zygarde'
        this.peso = 1
        this.altura = 0.3
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
        ]
        this.stats = {
            hp: 15,
            attack: 15,
            defense: 15,
            spattack: 15,
            spdefense: 15,
            speed: 15,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}