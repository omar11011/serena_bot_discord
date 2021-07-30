const Base = require('./Meltan').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 809
        this.pokemon = 'Melmetal'
        this.peso = 800
        this.altura = 2.5
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Melmetal Gigamax'),
        ]
        this.movimientos = [
            [move.get('golpe cabeza'), 1],
            [move.get('puño trueno'), 1],
            [move.get('impactrueno'), 27],
            [move.get('foco resplandor'), 45],
            [move.get('mega puño'), 54],
            [move.get('ferropuño doble'), 72],
            [move.get('fuerza bruta'), 81],
            [move.get('hiperrayo'), 90],
        ]
        this.stats = {
            hp: 135,
            attack: 143,
            defense: 143,
            spattack: 80,
            spdefense: 65,
            speed: 34,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}