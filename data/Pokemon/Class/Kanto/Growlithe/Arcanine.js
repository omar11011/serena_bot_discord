const Base = require('./Growlithe').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 59
        this.pokemon = 'Arcanine'
        this.peso = 155
        this.altura = 1.9
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Arcanine X', item.get('arcanita x')),
            new Entidades.Evolucion.Mega('Mega Arcanine Y', item.get('arcanita y')),
        ]
        this.captura = 75
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('ascuas'), 6],
            [move.get('rueda fuego'), 17],
            [move.get('inversión'), 19],
            [move.get('colmillo ígneo'), 21],
            [move.get('derribo'), 23],
            [move.get('pirotecnia'), 28],
            [move.get('represalia'), 32],
            [move.get('velocidad extrema'), 34],
            [move.get('lanzallamas'), 35],
            [move.get('triturar'), 40],
            [move.get('onda ígnea'), 44],
            [move.get('enfado'), 46],
            [move.get('envite ígneo'), 50],
        ]
        this.stats = {
            hp: 90,
            attack: 110,
            defense: 80,
            spattack: 100,
            spdefense: 80,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}