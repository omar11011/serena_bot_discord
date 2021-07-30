const Base = require('./Dratini').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 148
        this.pokemon = 'Dragonair'
        this.peso = 16.5
        this.altura = 4
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dragonite', 55),
        ]
        this.movimientos = [
            [move.get('constricción'), 1],
            [move.get('ciclón'), 11],
            [move.get('furia dragón'), 15],
            [move.get('atizar'), 21],
            [move.get('cola dragón'), 33],
            [move.get('acua cola'), 39],
            [move.get('carga dragón'), 47],
            [move.get('enfado'), 67],
            [move.get('hiperrayo'), 75],
        ]
        this.stats = {
            hp: 41,
            attack: 64,
            defense: 45,
            spattack: 50,
            spdefense: 50,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}