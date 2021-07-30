const Base = require('../Centiskorch').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Centiskorch Gigamax'
        this.peso = '???'
        this.altura = 75
        this.evolucion = []
        this.movimientos = [
            [move.get('gigacienfuegos'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}