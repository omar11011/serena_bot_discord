const Base = require('../Form/Brusco').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokemon = 'Urshifu Brusco Gigamax'
        this.peso = '???'
        this.altura = 29
        this.evolucion = []
        this.movimientos = [
            [move.get('gigagolpe brusco'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}