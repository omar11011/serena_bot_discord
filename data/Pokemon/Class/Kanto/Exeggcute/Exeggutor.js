const Base = require('./Exeggcute').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 103
        this.pokemon = 'Exeggutor'
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 120
        this.altura = 2
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('presa'), 1],
            [move.get('alboroto'), 1],
            [move.get('furia'), 10],
            [move.get('doble patada'), 12],
            [move.get('recurrente'), 17],
            [move.get('derribo'), 20],
            [move.get('confusión'), 27],
            [move.get('don natural'), 37],
            [move.get('rayo solar'), 43],
            [move.get('paranormal'), 47],
            [move.get('psíquico'), 50],
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