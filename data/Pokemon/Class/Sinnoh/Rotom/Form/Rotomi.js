const Base = require('../Rotom').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Rotomi'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Volador,
        ]
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
        ]
        this.stats = {
            hp: 50,
            attack: 100,
            defense: 100,
            spattack: 10,
            spdefense: 10,
            speed: 150,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}