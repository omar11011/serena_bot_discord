const Base = require('../Coalossal').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Coalossal Gigamax'
        this.peso = '???'
        this.altura = 42
        this.evolucion = []
        this.movimientos = [
            [move.get('gigarroca ígnea'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}