const Base = require('../Butterfree').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Butterfree Gigamax'
        this.altura = 17
        this.peso = '???'
        this.evolucion = []
        this.movimientos = [
            [move.get('gigaestupor'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}