const Base = require('../Pikachu').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Pikachu Gigamax'
        this.peso = '???'
        this.altura = 21
        this.evolucion = []
        this.movimientos = [
            [move.get('gigatronada'), 1],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}