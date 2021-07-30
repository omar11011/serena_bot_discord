const Base = require('../Charizard').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Charizard Gigamax'
        this.peso = '???'
        this.altura = 28
        this.evolucion = []
        this.movimientos = [
            [move.get('gigallamarada'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}