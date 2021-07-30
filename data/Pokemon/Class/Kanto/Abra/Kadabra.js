const Base = require('./Abra').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 64
        this.pokemon = 'Kadabra'
        this.peso = 56.5
        this.altura = 1.3
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Alakazam', item.get('cuchara torcida')),
        ]
        this.captura = 100
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('arañazo'), 6],
            [move.get('golpe cuerpo'), 10],
            [move.get('mega puño'), 14],
            [move.get('psicorrayo'), 21],
            [move.get('psicocorte'), 28],
            [move.get('psíquico'), 38],
            [move.get('premonición'), 43],
        ]
        this.stats = {
            hp: 40,
            attack: 35,
            defense: 30,
            spattack: 120,
            spdefense: 70,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}