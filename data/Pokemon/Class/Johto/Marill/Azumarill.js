const Base = require('./Marill').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 184
        this.pokemon = 'Azumarill'
        this.peso = 28.5
        this.altura = 0.8
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 1],
            [move.get('burbuja'), 7],
            [move.get('desenrollar'), 10],
            [move.get('rayo burbuja'), 13],
            [move.get('acua cola'), 21],
            [move.get('carantoña'), 25],
            [move.get('doble filo'), 42],
            [move.get('fuerza bruta'), 46],
            [move.get('hidrobomba'), 55],
        ]
        this.stats = {
            hp: 100,
            attack: 50,
            defense: 80,
            spattack: 60,
            spdefense: 80,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}