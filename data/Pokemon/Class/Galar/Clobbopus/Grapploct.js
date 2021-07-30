const Base = require('./Clobbopus').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 853
        this.pokemon = 'Grapploct'
        this.peso = 39
        this.altura = 1.6
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('golpe roca'), 1],
            [move.get('amago'), 5],
            [move.get('atadura'), 10],
            [move.get('demolición'), 20],
            [move.get('sumisión'), 30],
            [move.get('pulpocañón'), 35],
            [move.get('inversión'), 40],
            [move.get('fuerza bruta'), 45],
        ]
        this.stats = {
            hp: 80,
            attack: 118,
            defense: 90,
            spattack: 70,
            spdefense: 80,
            speed: 42,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}