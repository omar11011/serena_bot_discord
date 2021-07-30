const Base = require('../Rotom').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'RotomDex Hembra'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Normal,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
        ]
        this.stats = {
            hp: 10,
            attack: 10,
            defense: 10,
            spattack: 10,
            spdefense: 10,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}