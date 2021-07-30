const Base = require('./Morgrem').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 861
        this.pokemon = 'Grimmsnarl'
        this.peso = 61
        this.altura = 1.5
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Grimmsnarl', item.get('grimmsnarlita')),
            new Entidades.Evolucion.Gigamax('Grimmsnarl Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('sorpresa'), 1],
            [move.get('puño incremento'), 1],
            [move.get('mordisco'), 4],
            [move.get('buena baza'), 16],
            [move.get('golpe bajo'), 24],
            [move.get('irreverencia'), 32],
            [move.get('pulso umbrío'), 35],
            [move.get('choque anímico'), 42],
            [move.get('carantoña'), 48],
            [move.get('juego sucio'), 56],
            [move.get('machada'), 64],
        ]
        this.stats = {
            hp: 95,
            attack: 120,
            defense: 65,
            spattack: 95,
            spdefense: 75,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}