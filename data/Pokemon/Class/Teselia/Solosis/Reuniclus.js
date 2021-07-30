const Base = require('./Solosis').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 579
        this.pokemon = 'Reuniclus'
        this.peso = 20.1
        this.altura = 1
        this.evolucion = []
        this.captura = 50
        this.movimientos = [
            [move.get('psicoonda'), 1],
            [move.get('desenrollar'), 7],
            [move.get('poder oculto'), 14],
            [move.get('psicocarga'), 25],
            [move.get('esfuerzo'), 28],
            [move.get('premonición'), 31],
            [move.get('psíquico'), 39],
            [move.get('puño mareo'), 41],
        ]
        this.stats = {
            hp: 110,
            attack: 65,
            defense: 75,
            spattack: 125,
            spdefense: 85,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}