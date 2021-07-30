const Base = require('./AlolanGeodude').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 75
        this.pokedex = false
        this.pokemon = 'Graveler de Alola'
        this.peso = 110
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Golem de Alola'),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('desenrollar'), 10],
            [move.get('chispa'), 12],
            [move.get('lanzarrocas'), 16],
            [move.get('antiaéreo'), 18],
            [move.get('puño trueno'), 22],
            [move.get('pedrada'), 34],
            [move.get('chispazo'), 40],
            [move.get('doble filo'), 50],
            [move.get('roca afilada'), 54],
        ]
        this.stats = {
            hp: 55,
            attack: 95,
            defense: 115,
            spattack: 45,
            spdefense: 45,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}