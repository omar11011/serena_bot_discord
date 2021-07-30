const Base = require('./Sandile').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 552
        this.pokemon = 'Krokorok'
        this.peso = 33.4
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Krookodile', 40),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('furia'), 1],
            [move.get('mordisco'), 4],
            [move.get('bucle arena'), 13],
            [move.get('buena baza'), 16],
            [move.get('bofetón lodo'), 19],
            [move.get('triturar'), 28],
            [move.get('excavar'), 32],
            [move.get('juego sucio'), 40],
            [move.get('terremoto'), 48],
            [move.get('golpe'), 52],
        ]
        this.stats = {
            hp: 60,
            attack: 82,
            defense: 45,
            spattack: 45,
            spdefense: 45,
            speed: 74,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}