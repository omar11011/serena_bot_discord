const Base = require('./Krokorok').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 553
        this.pokemon = 'Krookodile'
        this.peso = 96.3
        this.altura = 1.5
        this.evolucion = []
        this.color = Entidades.Color.Rojo
        this.captura = 45
        this.movimientos = [
            [move.get('furia'), 1],
            [move.get('chulería'), 1],
            [move.get('mordisco'), 4],
            [move.get('bucle arena'), 13],
            [move.get('buena baza'), 16],
            [move.get('bofetón lodo'), 19],
            [move.get('triturar'), 28],
            [move.get('excavar'), 32],
            [move.get('juego sucio'), 42],
            [move.get('terremoto'), 54],
            [move.get('enfado'), 60],
        ]
        this.stats = {
            hp: 95,
            attack: 117,
            defense: 80,
            spattack: 65,
            spdefense: 70,
            speed: 92,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}