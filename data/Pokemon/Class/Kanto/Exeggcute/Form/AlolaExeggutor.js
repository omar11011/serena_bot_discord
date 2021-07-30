const Base = require('./AlolanExeggcute').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 103
        this.pokemon = 'Exeggutor de Alola'
        this.peso = 415.6
        this.altura = 10.9
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('martillo dragón'), 1],
            [move.get('pulso dragón'), 1],
            [move.get('bomba germen'), 1],
            [move.get('latigazo'), 1],
            [move.get('bombardeo'), 1],
            [move.get('confusión'), 1],
            [move.get('psicocarga'), 17],
            [move.get('bomba huevo'), 27],
            [move.get('mazazo'), 37],
            [move.get('lluevehojas'), 47],
        ]
        this.stats = {
            hp: 95,
            attack: 95,
            defense: 85,
            spattack: 125,
            spdefense: 75,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}