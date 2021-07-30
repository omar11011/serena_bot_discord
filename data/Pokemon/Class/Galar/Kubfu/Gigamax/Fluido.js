const Base = require('../Form/Fluido').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Urshifu Fluido Gigamax'
        this.peso = '???'
        this.altura = 26
        this.evolucion = []
        this.movimientos = [
            [move.get('gigagolpe fluido'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}