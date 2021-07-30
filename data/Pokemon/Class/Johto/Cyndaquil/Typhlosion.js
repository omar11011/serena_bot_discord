const Base = require('./Quilava').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 157
        this.pokemon = 'Typhlosion'
        this.peso = 79.5
        this.altura = 1.7
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Typhlosion', item.get('typhlosionita')),
            new Entidades.Evolucion.Gigamax('Typhlosion Gigamax'),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 10],
            [move.get('ataque rápido'), 13],
            [move.get('rueda fuego'), 19],
            [move.get('nitrocarga'), 28],
            [move.get('rapidez'), 31],
            [move.get('humareda'), 43],
            [move.get('lanzallamas'), 48],
            [move.get('infierno'), 56],
            [move.get('desenrollar'), 61],
            [move.get('doble filo'), 69],
            [move.get('llama final'), 74],
            [move.get('estallido'), 82],
        ]
        this.stats = {
            hp: 78,
            attack: 84,
            defense: 78,
            spattack: 109,
            spdefense: 85,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}