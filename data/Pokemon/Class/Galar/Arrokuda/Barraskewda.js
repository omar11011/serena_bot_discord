const Base = require('./Arrokuda').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 847
        this.pokemon = 'Barraskewda'
        this.peso = 30
        this.altura = 1.3
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('acua jet'), 1],
            [move.get('ataque furia'), 6],
            [move.get('mordisco'), 12],
            [move.get('buceo'), 24],
            [move.get('triturar'), 40],
            [move.get('hidroariete'), 48],
            [move.get('doble filo'), 56],
        ]
        this.stats = {
            hp: 61,
            attack: 123,
            defense: 60,
            spattack: 60,
            spdefense: 50,
            speed: 136,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}