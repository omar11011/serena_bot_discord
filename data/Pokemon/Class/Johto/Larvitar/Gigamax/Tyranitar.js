const Base = require('../Tyranitar').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Tyranitar Gigamax'
        this.peso = '???'
        this.altura = 28
        this.evolucion = []
        this.movimientos = [
            [move.get('gigadesierto'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}