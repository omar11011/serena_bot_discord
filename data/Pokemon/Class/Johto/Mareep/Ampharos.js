const Base = require('./Flaaffy').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 181
        this.pokemon = 'Ampharos'
        this.peso = 61.5
        this.altura = 1.4
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Ampharos', item.get('ampharosita')),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('electrocañón'), 1],
            [move.get('puño fuego'), 1],
            [move.get('impactrueno'), 8],
            [move.get('derribo'), 20],
            [move.get('bola voltio'), 25],
            [move.get('joya de luz'), 35],
            [move.get('chispazo'), 40],
            [move.get('doble rayo'), 51],
            [move.get('trueno'), 62],
            [move.get('pulso dragón'), 65],
        ]
        this.stats = {
            hp: 90,
            attack: 75,
            defense: 85,
            spattack: 115,
            spdefense: 90,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}