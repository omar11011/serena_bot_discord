const Base = require('../Necrozma').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Necrozma Alas del Alba'
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Fantasma,
        ]
        this.peso = 350
        this.altura = 4.2
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Ultra Necrozma', item.get('ultranecrostal z'),)
        ]
        this.stats = {
            hp: 97,
            attack: 113,
            defense: 109,
            spattack: 157,
            spdefense: 127,
            speed: 77,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}