const Base = require('./Electrike').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 310
        this.pokemon = 'Manectric'
        this.region = Entidades.Region.Hoenn
        this.peso = 40.2
        this.altura = 1.5
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Manectric', item.get('manectricita')),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 10],
            [move.get('chispa'), 13],
            [move.get('colmillo rayo'), 19],
            [move.get('mordisco'), 24],
            [move.get('chispazo'), 29],
            [move.get('voltio cruel'), 39],
            [move.get('trueno'), 49],
        ]
        this.stats = {
            hp: 70,
            attack: 75,
            defense: 60,
            spattack: 105,
            spdefense: 60,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}