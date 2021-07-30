const Base = require('./Axew').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 611
        this.pokemon = 'Fraxure'
        this.peso = 36
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Haxorus', 48),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('buena baza'), 7],
            [move.get('furia dragón'), 10],
            [move.get('cuchillada'), 20],
            [move.get('falsotortazo'), 24],
            [move.get('garra dragón'), 28],
            [move.get('pulso dragón'), 42],
            [move.get('guillotina'), 54],
            [move.get('enfado'), 60],
            [move.get('giga impacto'), 66],
        ]
        this.stats = {
            hp: 66,
            attack: 117,
            defense: 70,
            spattack: 40,
            spdefense: 50,
            speed: 67,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}