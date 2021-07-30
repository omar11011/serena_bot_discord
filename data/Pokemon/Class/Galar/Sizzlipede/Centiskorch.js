const Base = require('./Sizzlipede').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 851
        this.pokemon = 'Centiskorch'
        this.peso = 120
        this.altura = 3
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Centiskorch Gigamax'),
        ]
        this.captura = 75
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('constricción'), 5],
            [move.get('mordisco'), 10],
            [move.get('rueda fuego'), 15],
            [move.get('picadura'), 20],
            [move.get('atizar'), 32],
            [move.get('giro fuego'), 39],
            [move.get('triturar'), 46],
            [move.get('látigo ígneo'), 53],
            [move.get('plancha'), 60],
            [move.get('infierno'), 67],
            [move.get('llama final'), 67],
        ]
        this.stats = {
            hp: 100,
            attack: 115,
            defense: 65,
            spattack: 90,
            spdefense: 90,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}