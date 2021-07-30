const Base = require('./Barboach').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 340
        this.pokemon = 'Whiscash'
        this.peso = 23.6
        this.altura = 0.9
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('bofetón lodo'), 1],
            [move.get('pistola agua'), 9],
            [move.get('bomba fango'), 13],
            [move.get('hidropulso'), 17],
            [move.get('magnitud'), 20],
            [move.get('ronquido'), 25],
            [move.get('acua cola'), 28],
            [move.get('cabezazo zen'), 30],
            [move.get('terremoto'), 34],
            [move.get('agua lodosa'), 39],
            [move.get('premonición'), 45],
            [move.get('fisura'), 52],
        ]
        this.stats = {
            hp: 110,
            attack: 78,
            defense: 73,
            spattack: 76,
            spdefense: 71,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}