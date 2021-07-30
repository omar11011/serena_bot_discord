const Base = require('../Necrozma').class
const Entidades = require('../../../../../index')
const item = require('../../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Necrozma Melena Crepuscular'
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Acero,
        ]
        this.peso = 460
        this.altura = 3.8
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Ultra Necrozma', item.get('ultranecrostal z'),)
        ]
        this.stats = {
            hp: 97,
            attack: 157,
            defense: 127,
            spattack: 113,
            spdefense: 109,
            speed: 77,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}