const Base = require('./Yamask').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 563
        this.pokemon = 'Cofagrigus'
        this.peso = 76.5
        this.altura = 1.5
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('tinieblas'), 13],
            [move.get('infortunio'), 17],
            [move.get('viento aciago'), 25],
            [move.get('bola sombra'), 39],
        ]
        this.stats = {
            hp: 58,
            attack: 50,
            defense: 145,
            spattack: 95,
            spdefense: 105,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}