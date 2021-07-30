const Base = require('../Alcremie').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Alcremie Gigamax'
        this.peso = '???'
        this.altura = 30
        this.evolucion = []
        this.movimientos = [
            [move.get('gigacolofón'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}