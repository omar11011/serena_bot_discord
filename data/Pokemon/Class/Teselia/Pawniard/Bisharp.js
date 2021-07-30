const Base = require('./Pawniard').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 625
        this.pokemon = 'Bisharp'
        this.peso = 70
        this.altura = 1.6
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Bisharp', item.get('bisharpita')),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('corte furia'), 9],
            [move.get('finta'), 17],
            [move.get('garra metal'), 25],
            [move.get('cuchillada'), 30],
            [move.get('buena baza'), 33],
            [move.get('tajo umbrío'), 49],
            [move.get('cabeza de hierro'), 57],
            [move.get('guillotina'), 71],
        ]
        this.stats = {
            hp: 65,
            attack: 125,
            defense: 100,
            spattack: 60,
            spdefense: 70,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}