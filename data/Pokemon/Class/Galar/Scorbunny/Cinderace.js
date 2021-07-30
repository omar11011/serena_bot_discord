const Base = require('./Raboot').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 815
        this.pokemon = 'Cinderace'
        this.peso = 33
        this.altura = 1.4
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Cinderace Gigamax'),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('amago'), 1],
            [move.get('ascuas'), 6],
            [move.get('ataque rápido'), 8],
            [move.get('doble patada'), 12],
            [move.get('nitrocarga'), 19],
            [move.get('golpe cabeza'), 30],
            [move.get('balón ígneo'), 35],
            [move.get('contraataque'), 38],
            [move.get('bote'), 46],
            [move.get('doble filo'), 54],
        ]
        this.stats = {
            hp: 80,
            attack: 116,
            defense: 75,
            spattack: 65,
            spdefense: 75,
            speed: 119,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}