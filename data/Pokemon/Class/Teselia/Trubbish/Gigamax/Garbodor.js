const Base = require('../Garbodor').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Garbodor Gigamax'
        this.peso = '???'
        this.altura = 21
        this.evolucion = []
        this.movimientos = [
            [move.get('gigapestilencia'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}