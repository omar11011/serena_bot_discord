const Base = require('./Impidimp').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 860
        this.pokemon = 'Morgrem'
        this.peso = 12.5
        this.altura = 0.8
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Grimmsnarl', 42),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('sorpresa'), 1],
            [move.get('mordisco'), 4],
            [move.get('buena baza'), 16],
            [move.get('golpe bajo'), 24],
            [move.get('irreverencia'), 32],
            [move.get('pulso umbrío'), 35],
            [move.get('carantoña'), 46],
            [move.get('juego sucio'), 52],
        ]
        this.stats = {
            hp: 65,
            attack: 60,
            defense: 45,
            spattack: 75,
            spdefense: 55,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}