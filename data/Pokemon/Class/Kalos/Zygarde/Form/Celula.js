const Base = require('../Zygarde').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Célula de Zygarde'
        this.peso = 1
        this.altura = 0.3
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
        ]
        this.stats = {
            hp: 1,
            attack: 1,
            defense: 1,
            spattack: 1,
            spdefense: 1,
            speed: 1,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}