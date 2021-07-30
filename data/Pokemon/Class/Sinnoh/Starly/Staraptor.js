const Base = require('./Staravia').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 398
        this.pokemon = 'Staraptor'
        this.peso = 24.9
        this.altura = 1.2
        this.evolucion = [
            new Entidades.Evolucion.Mega('Staraptor', item.get('staraptorita')),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 5],
            [move.get('ataque ala'), 9],
            [move.get('esfuerzo'), 18],
            [move.get('golpe aéreo'), 28],
            [move.get('derribo'), 33],
            [move.get('a bocajarro'), 34],
            [move.get('pájaro osado'), 49],
        ]
        this.stats = {
            hp: 85,
            attack: 120,
            defense: 70,
            spattack: 50,
            spdefense: 60,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}