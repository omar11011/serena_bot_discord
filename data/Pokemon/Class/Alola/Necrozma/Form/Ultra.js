const Base = require('../Necrozma').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Ultra Necrozma'
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Dragón,
        ]
        this.peso = 230
        this.altura = 7.5
        this.evolucion = []
        this.stats = {
            hp: 97,
            attack: 167,
            defense: 97,
            spattack: 167,
            spdefense: 97,
            speed: 129,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}