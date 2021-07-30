const Base = require('./Gastly').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 93
        this.pokemon = 'Haunter'
        this.peso = 0.1
        this.altura = 1.6
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Gengar'),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('lengüetazo'), 1],
            [move.get('tóxico'), 6],
            [move.get('tinieblas'), 15],
            [move.get('golpe bajo'), 22],
            [move.get('puño sombra'), 25],
            [move.get('vendetta'), 28],
            [move.get('bola sombra'), 33],
            [move.get('come sueños'), 39],
            [move.get('pulso umbrío'), 44],
            [move.get('infortunio'), 55],
        ]
        this.stats = {
            hp: 45,
            attack: 50,
            defense: 45,
            spattack: 115,
            spdefense: 55,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}