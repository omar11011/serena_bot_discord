const Base = require('./Houndour').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 229
        this.pokemon = 'Houndoom'
        this.peso = 35
        this.altura = 1.4
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Houndoom', item.get('Houndoomita')),
        ]
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('polución'), 8],
            [move.get('mordisco'), 16],
            [move.get('paliza'), 25],
            [move.get('colmillo ígneo'), 28],
            [move.get('finta'), 35],
            [move.get('juego sucio'), 45],
            [move.get('lanzallamas'), 50],
            [move.get('triturar'), 56],
            [move.get('infierno'), 65],
        ]
        this.stats = {
            hp: 75,
            attack: 90,
            defense: 50,
            spattack: 110,
            spdefense: 80,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}