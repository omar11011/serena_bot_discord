const Base = require('../Orbeetle').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Orbeetle Gigamax'
        this.peso = '???'
        this.altura = 14
        this.evolucion = []
        this.movimientos = [
            [move.get('gigabóveda'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}