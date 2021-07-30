const Base = require('../Lapras').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Lapras Gigamax'
        this.peso = '???'
        this.altura = 24
        this.evolucion = []
        this.movimientos = [
            [move.get('gigamelodía'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}