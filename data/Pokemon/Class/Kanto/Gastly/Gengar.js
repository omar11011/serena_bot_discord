const Base = require('./Haunter').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 94
        this.pokemon = 'Gengar'
        this.peso = 40.5
        this.altura = 1.5
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Gengar', item.get('gengarita')),
            new Entidades.Evolucion.Gigamax('Gengar Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('lengüetazo'), 1],
            [move.get('tóxico'), 6],
            [move.get('tinieblas'), 15],
            [move.get('golpe bajo'), 22],
            [move.get('puño sombra'), 25],
            [move.get('vendetta'), 28],
            [move.get('mega puño'), 30],
            [move.get('bola sombra'), 33],
            [move.get('come sueños'), 39],
            [move.get('pulso umbrío'), 44],
            [move.get('infortunio'), 55],
        ]
        this.stats = {
            hp: 60,
            attack: 65,
            defense: 60,
            spattack: 130,
            spdefense: 75,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}