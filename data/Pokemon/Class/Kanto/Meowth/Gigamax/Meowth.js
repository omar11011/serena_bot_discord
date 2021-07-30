const Base = require('../Meowth').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Meowth Gigamax'
        this.peso = '???'
        this.altura = 33
        this.evolucion = []
        this.movimientos = [
            [move.get('gigamonedas'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}