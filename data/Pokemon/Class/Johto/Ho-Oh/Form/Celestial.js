const Base = require('../Ho-Oh').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.redeem = true
        this.pokemon = 'Ho-Oh Celestial'
        this.region = Entidades.Region.Saife
        this.peso = 205
        this.altura = 4
        this.movimientos = [
            [move.get('meteorobola'), 1],
            [move.get('tornado'), 9],
            [move.get('pájaro osado'), 15],
            [move.get('paranormal'), 23],
            [move.get('llamarada'), 37],
            [move.get('fuego sagrado'), 43],
            [move.get('castigo'), 50],
            [move.get('poder pasado'), 57],
            [move.get('premonición'), 79],
            [move.get('don natural'), 85],
            [move.get('fin oscuro'), 90],
            [move.get('ataque aéreo'), 99],
        ]
        this.stats = {
            hp: 100,
            attack: 100,
            defense: 100,
            spattack: 120,
            spdefense: 160,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}