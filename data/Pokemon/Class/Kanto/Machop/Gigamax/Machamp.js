const Base = require('../Machamp').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Machamp Gigamax'
        this.peso = '???'
        this.altura = 25
        this.evolucion = []
        this.movimientos = [
            [move.get('gigapuñición'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}