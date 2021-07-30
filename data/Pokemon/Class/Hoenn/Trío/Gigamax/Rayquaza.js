const Base = require('../Rayquaza').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Rayquaza Gigamax'
        this.peso = '???'
        this.evolucion = []
        this.movimientos = [
            [move.get('gigaataque atmosférico'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}