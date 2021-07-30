const Base = require('../Hydreigon').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Hydreigon Gigamax'
        this.peso = '???'
        this.altura = 27
        this.evolucion = []
        this.movimientos = [
            [move.get('gigadesgaste'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}