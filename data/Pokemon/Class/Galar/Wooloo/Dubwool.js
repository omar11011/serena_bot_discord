const Base = require('./Wooloo').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 832
        this.pokemon = 'Dubwool'
        this.peso = 43
        this.altura = 1.3
        this.evolucion = []
        this.captura = 127
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('doble patada'), 16],
            [move.get('golpe cabeza'), 21],
            [move.get('derribo'), 27],
            [move.get('inversión'), 38],
            [move.get('doble filo'), 50],
            [move.get('última baza'), 56],
        ]
        this.stats = {
            hp: 72,
            attack: 80,
            defense: 100,
            spattack: 60,
            spdefense: 90,
            speed: 88,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}