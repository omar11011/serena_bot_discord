const Base = require('../Copperajah').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Copperajah Gigamax'
        this.peso = '???'
        this.altura = 23
        this.evolucion = []
        this.movimientos = [
            [move.get('gigatrampa acero'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}