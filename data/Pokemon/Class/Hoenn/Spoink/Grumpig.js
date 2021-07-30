const Base = require('./Spoink').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 326
        this.pokemon = 'Grumpig'
        this.peso = 71.5
        this.altura = 0.9
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('eructo'), 1],
            [move.get('psicoonda'), 7],
            [move.get('psicorrayo'), 14],
            [move.get('cabezazo zen'), 26],
            [move.get('joya de luz'), 29],
            [move.get('ronquido'), 33],
            [move.get('psicocarga'), 38],
            [move.get('vendetta'), 40],
            [move.get('psíquico'), 44],
            [move.get('bote'), 50],
        ]
        this.stats = {
            hp: 80,
            attack: 46,
            defense: 65,
            spattack: 90,
            spdefense: 110,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}