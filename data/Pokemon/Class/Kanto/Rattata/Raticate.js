const Base = require('./Rattata').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 20
        this.pokemon = 'Raticate'
        this.peso = 18.5
        this.altura = 0.7
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 127
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 4],
            [move.get('mordisco'), 10],
            [move.get('persecución'), 13],
            [move.get('hiper colmillo'), 16],
            [move.get('triturar'), 24],
            [move.get('golpe bajo'), 29],
            [move.get('buena baza'), 29],
            [move.get('super diente'), 34],
            [move.get('doble filo'), 39],
        ]
        this.stats = {
            hp: 55,
            attack: 81,
            defense: 60,
            spattack: 50,
            spdefense: 70,
            speed: 97,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}