const Base = require('./Drakloak').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 887
        this.pokemon = 'Dragapult'
        this.peso = 50
        this.altura = 3
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Dragapult', item.get('dragapultita')),
        ]
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('acoso'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('mordisco'), 1],
            [move.get('golpe bajo'), 1],
            [move.get('buena baza'), 12],
            [move.get('infortunio'), 18],
            [move.get('doble golpe'), 30],
            [move.get('dragoaliento'), 35],
            [move.get('golpe fantasma'), 48],
            [move.get('pulso dragón'), 50],
            [move.get('derribo'), 54],
            [move.get('draco flechas'), 60],
            [move.get('carga dragón'), 63],
            [move.get('doble filo'), 70],
            [move.get('última baza'), 78],
        ]
        this.stats = {
            hp: 88,
            attack: 120,
            defense: 75,
            spattack: 100,
            spdefense: 75,
            speed: 142,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}