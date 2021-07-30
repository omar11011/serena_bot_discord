const Base = require('../Kingler').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Kingler Gigamax'
        this.peso = '???'
        this.altura = 19
        this.evolucion = []
        this.movimientos = [
            [move.get('gigaespuma'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}