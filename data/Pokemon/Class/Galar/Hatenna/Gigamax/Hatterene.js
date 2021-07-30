const Base = require('../Hatterene').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Hatterene Gigamax'
        this.peso = '???'
        this.altura = 26
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('gigacastigo'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}