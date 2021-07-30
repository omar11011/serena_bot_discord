const Base = require('./Staryu').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 121
        this.pokemon = 'Starmie'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Psíquico,
        ]
        this.peso = 80
        this.altura = 1.1
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Starmie', item.get('starmita'))
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 4],
            [move.get('giro rápido'), 7],
            [move.get('psicoonda'), 13],
            [move.get('rapidez'), 16],
            [move.get('rayo burbuja'), 18],
            [move.get('furia'), 20],
            [move.get('giro bola'), 24],
            [move.get('salmuera'), 28],
            [move.get('joya de luz'), 37],
            [move.get('psíquico'), 42],
            [move.get('hidrobomba'), 52],
        ]
        this.stats = {
            hp: 60,
            attack: 75,
            defense: 85,
            spattack: 100,
            spdefense: 85,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}