const Base = require('../Blaziken').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Blaziken Gigamax'
        this.peso = '???'
        this.altura = 27.5
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