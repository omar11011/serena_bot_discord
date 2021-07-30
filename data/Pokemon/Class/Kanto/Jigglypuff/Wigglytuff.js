const Base = require('./Jigglypuff').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 40
        this.pokemon = 'Wigglytuff'
        this.peso = 12
        this.altura = 1
        this.evolucion = []
        this.captura = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('carantoña'), 1],
            [move.get('voz cautivadora'), 11],
            [move.get('doble bofetón'), 17],
            [move.get('desenrollar'), 20],
            [move.get('canon'), 22],
            [move.get('escupir'), 25],
            [move.get('espabila'), 27],
            [move.get('golpe cuerpo'), 32],
            [move.get('giro bola'), 35],
            [move.get('vozarrón'), 41],
            [move.get('doble filo'), 45],
        ]
        this.stats = {
            hp: 140,
            attack: 70,
            defense: 45,
            spattack: 80,
            spdefense: 50,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}