const Base = require('./Goomy').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 705
        this.pokemon = 'Sliggoo'
        this.peso = 17.5
        this.altura = 0.8
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Goodra', 50),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('burbuja'), 1],
            [move.get('absorber'), 5],
            [move.get('dragoaliento'), 18],
            [move.get('azote'), 28],
            [move.get('golpe cuerpo'), 32],
            [move.get('agua lodosa'), 38],
            [move.get('pulso dragón'), 47],
        ]
        this.stats = {
            hp: 68,
            attack: 75,
            defense: 53,
            spattack: 83,
            spdefense: 113,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}