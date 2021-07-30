const Base = require('./Applin').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 841
        this.pokemon = 'Flapple'
        this.peso = 1
        this.altura = 0.3
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Flapple Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('ataque ala'), 1],
            [move.get('ciclón'), 1],
            [move.get('bomba ácida'), 4],
            [move.get('acróbata'), 8],
            [move.get('dragoaliento'), 20],
            [move.get('pulso dragón'), 28],
            [move.get('fuerza g'), 32],
            [move.get('vuelo'), 40],
            [move.get('carga dragón'), 44],
        ]
        this.stats = {
            hp: 70,
            attack: 110,
            defense: 80,
            spattack: 95,
            spdefense: 60,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}