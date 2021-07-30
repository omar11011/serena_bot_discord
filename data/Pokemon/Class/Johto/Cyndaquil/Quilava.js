const Base = require('./Cyndaquil').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 156
        this.pokemon = 'Quilava'
        this.peso = 19
        this.altura = 0.9
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Typhlosion', 36),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 10],
            [move.get('ataque rápido'), 13],
            [move.get('rueda fuego'), 19],
            [move.get('nitrocarga'), 28],
            [move.get('rapidez'), 31],
            [move.get('humareda'), 42],
            [move.get('lanzallamas'), 46],
            [move.get('infierno'), 53],
            [move.get('desenrollar'), 57],
            [move.get('doble filo'), 64],
            [move.get('llama final'), 68],
            [move.get('estallido'), 74],
        ]
        this.stats = {
            hp: 58,
            attack: 64,
            defense: 58,
            spattack: 80,
            spdefense: 65,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}