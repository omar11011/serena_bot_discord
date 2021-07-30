const Base = require('./Amaura').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 699
        this.pokemon = 'Aurorus'
        this.peso = 225
        this.altura = 2.7
        this.evolucion = []
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('lanzarrocas'), 10],
            [move.get('viento hielo'), 13],
            [move.get('derribo'), 15],
            [move.get('rayo aurora'), 20],
            [move.get('poder pasado'), 26],
            [move.get('canon'), 30],
            [move.get('alud'), 34],
            [move.get('rayo hielo'), 56],
            [move.get('hiperrayo'), 63],
            [move.get('ventisca'), 74],
            [move.get('liofilización'), 77],
        ]
        this.stats = {
            hp: 123,
            attack: 77,
            defense: 72,
            spattack: 99,
            spdefense: 92,
            speed: 58,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}