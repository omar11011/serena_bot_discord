const Base = require('../Eevee').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Eevee Gigamax'
        this.peso = '???'
        this.altura = 18
        this.evolucion = []
        this.movimientos = [
            [move.get('gigaternura'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}