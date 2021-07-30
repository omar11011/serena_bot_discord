const Base = require('./Cufant').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 879
        this.pokemon = 'Copperajah'
        this.peso = 650
        this.altura = 3
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Copperajah Gigamax'),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('rodar'), 5],
            [move.get('golpe roca'), 10],
            [move.get('terratemblor'), 15],
            [move.get('pisotón'), 20],
            [move.get('excavar'), 30],
            [move.get('cuerpo pesado'), 34],
            [move.get('fuerza'), 37],
            [move.get('cabeza de hierro'), 44],
            [move.get('carantoña'), 51],
            [move.get('fuerza equina'), 58],
            [move.get('fuerza bruta'), 65],
        ]
        this.stats = {
            hp: 122,
            attack: 130,
            defense: 69,
            spattack: 80,
            spdefense: 69,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}