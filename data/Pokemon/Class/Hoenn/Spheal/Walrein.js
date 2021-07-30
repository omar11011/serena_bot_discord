const Base = require('./Sealeo').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 365
        this.pokemon = 'Walrein'
        this.peso = 150
        this.altura = 1.4
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('triturar'), 1],
            [move.get('pistola agua'), 1],
            [move.get('desenrollar'), 5],
            [move.get('bola hielo'), 13],
            [move.get('salmuera'), 17],
            [move.get('rayo aurora'), 21],
            [move.get('golpe cuerpo'), 26],
            [move.get('ronquido'), 35],
            [move.get('colmillo hielo'), 44],
            [move.get('ventisca'), 52],
            [move.get('frío polar'), 65],
        ]
        this.stats = {
            hp: 110,
            attack: 80,
            defense: 90,
            spattack: 95,
            spdefense: 90,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}