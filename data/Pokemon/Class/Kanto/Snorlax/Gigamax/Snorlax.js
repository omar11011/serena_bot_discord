const Base = require('../Snorlax').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Snorlax Gigamax'
        this.peso = '???'
        this.altura = 35
        this.evolucion = []
        this.movimientos = [
            [move.get('gigarreciclaje'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}