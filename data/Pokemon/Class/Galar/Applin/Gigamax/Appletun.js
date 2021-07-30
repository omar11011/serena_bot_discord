const Base = require('../Appletun').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Appletun Gigamax'
        this.peso = '???'
        this.altura = 24
        this.evolucion = []
        this.movimientos = [
            [move.get('giganéctar'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}