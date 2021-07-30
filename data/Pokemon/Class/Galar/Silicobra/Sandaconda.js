const Base = require('./Silicobra').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 844
        this.pokemon = 'Sandaconda'
        this.peso = 65.5
        this.altura = 3.8
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Sandaconda Gigamax'),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('constricción'), 1],
            [move.get('giro vil'), 10],
            [move.get('terratemblor'), 15],
            [move.get('golpe cabeza'), 20],
            [move.get('excavar'), 30],
            [move.get('atizar'), 42],
            [move.get('bucle arena'), 51],
            [move.get('cabezazo'), 55],
        ]
        this.stats = {
            hp: 72,
            attack: 107,
            defense: 125,
            spattack: 65,
            spdefense: 70,
            speed: 71,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}