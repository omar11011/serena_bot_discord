const Base = require('../Sylveon').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Sylveon Gigamax'
        this.peso = '???'
        this.altura = 24
        this.evolucion = []
        this.movimientos = [
            [move.get('gigalazo'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}