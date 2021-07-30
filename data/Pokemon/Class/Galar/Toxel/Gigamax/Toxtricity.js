const Base = require('../Toxtricity').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Toxtricity Gigamax'
        this.peso = '???'
        this.altura = 24
        this.evolucion = []
        this.movimientos = [
            [move.get('gigadescarga'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}