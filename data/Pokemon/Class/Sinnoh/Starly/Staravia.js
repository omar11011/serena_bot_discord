const Base = require('./Starly').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 397
        this.pokemon = 'Staravia'
        this.peso = 15.5
        this.altura = 0.6
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Staraptor', 34),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 5],
            [move.get('ataque ala'), 9],
            [move.get('esfuerzo'), 18],
            [move.get('golpe aéreo'), 28],
            [move.get('derribo'), 33],
            [move.get('pájaro osado'), 43],
        ]
        this.stats = {
            hp: 55,
            attack: 75,
            defense: 50,
            spattack: 40,
            spdefense: 40,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}