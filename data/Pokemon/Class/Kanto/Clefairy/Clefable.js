const Base = require('./Clefairy').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 36
        this.pokemon = 'Clefable'
        this.peso = 40
        this.altura = 1.3
        this.evolucion = []
        this.captura = 25
        this.movimientos = [
            [move.get('voz cautivadora'), 1],
            [move.get('destructor'), 1],
            [move.get('doble bofetón'), 10],
            [move.get('espabila'), 22],
            [move.get('derribo'), 25],
            [move.get('mega puño'), 28],
            [move.get('poder reserva'), 30],
            [move.get('golpe cuerpo'), 43],
            [move.get('fuerza lunar'), 48],
            [move.get('puño meteoro'), 53],
        ]
        this.stats = {
            hp: 95,
            attack: 70,
            defense: 73,
            spattack: 95,
            spdefense: 90,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}