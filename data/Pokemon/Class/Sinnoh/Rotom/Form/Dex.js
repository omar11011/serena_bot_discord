const Base = require('../Rotom').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'RotomDex'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Normal,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.color = Entidades.Color.Rojo
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