const Base = require('../Sandaconda').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Sandaconda Gigamax'
        this.peso = '???'
        this.altura = 22
        this.evolucion = []
        this.movimientos = [
            [move.get('gigapolvareda'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}