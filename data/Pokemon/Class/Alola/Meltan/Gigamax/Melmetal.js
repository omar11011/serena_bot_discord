const Base = require('../Melmetal').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Melmetal Gigamax'
        this.peso = '???'
        this.altura = 25
        this.evolucion = []
        this.movimientos = [
            [move.get('gigafundido'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}