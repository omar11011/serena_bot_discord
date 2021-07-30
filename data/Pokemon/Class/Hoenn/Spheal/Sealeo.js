const Base = require('./Spheal').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 364
        this.pokemon = 'Sealeo'
        this.peso = 87.6
        this.altura = 1.1
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Walrein', 44),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('pistola agua'), 1],
            [move.get('desenrollar'), 5],
            [move.get('bola hielo'), 13],
            [move.get('salmuera'), 17],
            [move.get('rayo aurora'), 21],
            [move.get('golpe cuerpo'), 26],
            [move.get('ronquido'), 35],
            [move.get('ventisca'), 47],
            [move.get('frío polar'), 55],
        ]
        this.stats = {
            hp: 90,
            attack: 60,
            defense: 70,
            spattack: 75,
            spdefense: 70,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}