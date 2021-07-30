const Base = require('../Groudon').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Groudon Gigamax'
        this.peso = '???'
        this.evolucion = []
        this.movimientos = [
            [move.get('gigaerupción'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}