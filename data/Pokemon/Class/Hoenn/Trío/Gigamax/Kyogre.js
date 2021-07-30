const Base = require('../Kyogre').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Kyogre Gigamax'
        this.peso = '???'
        this.evolucion = []
        this.movimientos = [
            [move.get('gigaremolino'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}