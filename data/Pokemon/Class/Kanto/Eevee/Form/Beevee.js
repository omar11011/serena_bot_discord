const Base = require('../Eevee').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.spawn = false
        this.redeem = true
        this.pokemon = 'Beevee'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Bicho,
        ]
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.movimientos = [
            [move.get('antojo'), 1],
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 13],
            [move.get('mordisco'), 17],
            [move.get('rapidez'), 17],
            [move.get('derribo'), 25],
            [move.get('zumbido'), 37],
            [move.get('última baza'), 41],
            [move.get('aguijón letal'), 45],
        ]
        this.stats = {
            hp: 55,
            attack: 55,
            defense: 50,
            spattack: 45,
            spdefense: 65,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}