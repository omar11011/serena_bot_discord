const Base = require('./Eevee').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 135
        this.pokemon = 'Jolteon'
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.peso = 24.5
        this.altura = 0.8
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Jolteon', item.get('jolteonsita')),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('impactrueno'), 5],
            [move.get('ataque rápido'), 13],
            [move.get('doble patada'), 17],
            [move.get('colmillo rayo'), 20],
            [move.get('pin misil'), 25],
            [move.get('chispa'), 30],
            [move.get('chispazo'), 37],
            [move.get('última baza'), 41],
            [move.get('trueno'), 45],
        ]
        this.stats = {
            hp: 65,
            attack: 65,
            defense: 60,
            spattack: 110,
            spdefense: 95,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}