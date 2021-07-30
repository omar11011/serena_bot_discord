const Base = require('../Gyarados').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Gyarados Gigamax'
        this.peso = '???'
        this.altura = 32
        this.evolucion = []
        this.movimientos = [
            [move.get('gigatrampa rocas'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}