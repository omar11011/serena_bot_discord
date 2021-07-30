const Base = require('../Blastoise').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Blastoise Gigamax'
        this.altura = 25
        this.peso = '???'
        this.evolucion = []
        this.movimientos = [
            [move.get('gigacañonazo'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}