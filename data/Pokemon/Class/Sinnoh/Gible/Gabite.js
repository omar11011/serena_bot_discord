const Base = require('./Gible').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 444
        this.pokemon = 'Gabite'
        this.peso = 56
        this.altura = 1.4
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Garchomp', 48),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('furia dragón'), 7],
            [move.get('derribo'), 15],
            [move.get('bucle arena'), 19],
            [move.get('golpe bis'), 24],
            [move.get('cuchillada'), 28],
            [move.get('garra dragón'), 33],
            [move.get('excavar'), 40],
            [move.get('carga dragón'), 49],
        ]
        this.stats = {
            hp: 68,
            attack: 90,
            defense: 65,
            spattack: 50,
            spdefense: 55,
            speed: 82,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}