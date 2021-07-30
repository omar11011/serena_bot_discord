const Base = require('../Grimmsnarl').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Grimmsnarl Gigamax'
        this.peso = '???'
        this.altura = 32
        this.evolucion = []
        this.movimientos = [
            [move.get('gigasopor'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}