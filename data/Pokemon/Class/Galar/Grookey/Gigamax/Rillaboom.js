const Base = require('../Rillaboom').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Rillaboom Gigamax'
        this.peso = '???'
        this.altura = 28
        this.evolucion = []
        this.movimientos = [
            [move.get('gigarredoble'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}