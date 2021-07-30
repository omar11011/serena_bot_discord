const Base = require('./Wingull').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 279
        this.pokemon = 'Pelipper'
        this.peso = 28
        this.altura = 1.2
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('ataque ala'), 8],
            [move.get('hidropulso'), 15],
            [move.get('vendetta'), 19],
            [move.get('salmuera'), 22],
            [move.get('lanzamiento'), 28],
            [move.get('escupir'), 33],
            [move.get('hidrobomba'), 50],
            [move.get('vendaval'), 55],
        ]
        this.stats = {
            hp: 60,
            attack: 50,
            defense: 100,
            spattack: 95,
            spdefense: 70,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}