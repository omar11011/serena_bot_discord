const Base = require('../Regigigas').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Regigigas Gigamax'
        this.peso = '???'
        this.altura = 46
        this.evolucion = []
        this.movimientos = [
            [move.get('gigamachada'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}