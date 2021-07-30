const Base = require('../Leafeon').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Leafeon Gigamax'
        this.peso = '???'
        this.altura = 22
        this.evolucion = []
        this.movimientos = [
            [move.get('gigalianas'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}