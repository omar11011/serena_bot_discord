const Base = require('../Gengar').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Gengar Gigamax'
        this.peso = '???'
        this.altura = 20
        this.evolucion = []
        this.movimientos = [
            [move.get('gigaaparición'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}