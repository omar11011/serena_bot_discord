const Base = require('./Dreepy').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 886
        this.pokemon = 'Drakloak'
        this.peso = 11
        this.altura = 1.4
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Dragapult', 60),
        ]
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('acoso'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('mordisco'), 1],
            [move.get('buena baza'), 12],
            [move.get('infortunio'), 18],
            [move.get('doble golpe'), 30],
            [move.get('golpe fantasma'), 48],
            [move.get('pulso dragón'), 50],
            [move.get('derribo'), 54],
            [move.get('carga dragón'), 61],
            [move.get('doble filo'), 66],
            [move.get('última baza'), 72],
        ]
        this.stats = {
            hp: 68,
            attack: 80,
            defense: 50,
            spattack: 60,
            spdefense: 50,
            speed: 102,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}