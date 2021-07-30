const Base = require('../Noivern').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Noivern Gigamax'
        this.peso = '???'
        this.altura = 26.5
        this.evolucion = []
        this.movimientos = [
            [move.get('gigadesgaste'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}