const Base = require('../Lucario').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Lucario Gigamax'
        this.peso = '???'
        this.altura = 26
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('gigahueso'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}