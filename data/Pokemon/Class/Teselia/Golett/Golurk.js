const Base = require('./Golett').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 623
        this.pokemon = 'Golurk'
        this.peso = 330
        this.altura = 2.8
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('impresionar'), 1],
            [move.get('bofetón lodo'), 5],
            [move.get('desenrollar'), 9],
            [move.get('puño sombra'), 13],
            [move.get('mega puño'), 21],
            [move.get('magnitud'), 25],
            [move.get('puño dinámico'), 30],
            [move.get('tinieblas'), 35],
            [move.get('cuerpo pesado'), 43],
            [move.get('terremoto'), 50],
            [move.get('machada'), 60],
            [move.get('puño certero'), 70],
            [move.get('golpe fantasma'), 75],
        ]
        this.stats = {
            hp: 89,
            attack: 124,
            defense: 80,
            spattack: 55,
            spdefense: 80,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}