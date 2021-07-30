const Base = require('./Voltorb').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 101
        this.pokemon = 'Electrode'
        this.peso = 66.6
        this.altura = 1.2
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('bomba sónica'), 4],
            [move.get('chispa'), 9],
            [move.get('desenrollar'), 11],
            [move.get('rayo carga'), 16],
            [move.get('rapidez'), 20],
            [move.get('bola voltio'), 22],
            [move.get('impactrueno'), 26],
            [move.get('derribo'), 30],
            [move.get('cabezazo'), 36],
            [move.get('chispazo'), 41],
            [move.get('rayo'), 46],
            [move.get('giro bola'), 54],
            [move.get('trueno'), 56],
        ]
        this.stats = {
            hp: 60,
            attack: 50,
            defense: 70,
            spattack: 80,
            spdefense: 80,
            speed: 150,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}