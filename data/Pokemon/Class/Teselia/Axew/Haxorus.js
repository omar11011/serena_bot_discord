const Base = require('./Fraxure').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 612
        this.pokemon = 'Haxorus'
        this.peso = 105
        this.altura = 1.8
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Haxorus', item.get('haxorita')),
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
            [move.get('guillotina'), 58],
            [move.get('enfado'), 66],
            [move.get('giga impacto'), 74],
        ]
        this.stats = {
            hp: 76,
            attack: 147,
            defense: 90,
            spattack: 60,
            spdefense: 70,
            speed: 97,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}