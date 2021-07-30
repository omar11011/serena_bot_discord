const Base = require('./Snorunt').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 362
        this.pokemon = 'Glalie'
        this.peso = 256.5
        this.altura = 1.5
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Glalie', item.get('glalita'), true),
        ]
        this.captura = 75
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('canto helado'), 10],
            [move.get('viento hielo'), 14],
            [move.get('mordisco'), 19],
            [move.get('colmillo hielo'), 23],
            [move.get('golpe cabeza'), 28],
            [move.get('vaho gélido'), 37],
            [move.get('triturar'), 41],
            [move.get('ventisca'), 48],
            [move.get('frío polar'), 61],
        ]
        this.stats = {
            hp: 80,
            attack: 80,
            defense: 80,
            spattack: 80,
            spdefense: 80,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}