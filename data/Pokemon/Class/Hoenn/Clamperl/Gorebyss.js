const Base = require('./Clamperl').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 368
        this.pokemon = 'Gorebyss'
        this.peso = 22.6
        this.altura = 1.8
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('torbellino'), 1],
            [move.get('confusión'), 1],
            [move.get('beso drenaje'), 11],
            [move.get('hidropulso'), 14],
            [move.get('colmillo hielo'), 16],
            [move.get('salmuera'), 19],
            [move.get('golpe bajo'), 23],
            [move.get('buceo'), 26],
            [move.get('psíquico'), 34],
            [move.get('acua cola'), 39],
            [move.get('hidrobomba'), 50],
        ]
        this.stats = {
            hp: 55,
            attack: 84,
            defense: 105,
            spattack: 114,
            spdefense: 75,
            speed: 52,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}