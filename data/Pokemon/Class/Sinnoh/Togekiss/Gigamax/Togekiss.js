const Base = require('../Togekiss').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Togekiss Gigamax'
        this.peso = '???'
        this.altura = 24
        this.evolucion = []
        this.movimientos = [
            [move.get('gigahuracán'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}