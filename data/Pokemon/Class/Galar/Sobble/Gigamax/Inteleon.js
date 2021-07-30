const Base = require('../Inteleon').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Inteleon Gigamax'
        this.peso = '???'
        this.altura = 40
        this.evolucion = []
        this.movimientos = [
            [move.get('gigadisparo'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}