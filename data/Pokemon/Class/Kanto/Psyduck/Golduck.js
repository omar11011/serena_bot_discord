const Base = require('./Psyduck').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 55
        this.pokemon = 'Golduck'
        this.peso = 76.6
        this.altura = 1.7
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Golduck', item.get('golduckita')),
        ]
        this.captura = 75
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('acua jet'), 1],
            [move.get('pistola agua'), 7],
            [move.get('confusión'), 10],
            [move.get('golpes furia'), 13],
            [move.get('hidropulso'), 16],
            [move.get('cabezazo zen'), 25],
            [move.get('acua cola'), 28],
            [move.get('mega puño'), 32],
            [move.get('hidrobomba'), 46],
        ]
        this.stats = {
            hp: 80,
            attack: 82,
            defense: 78,
            spattack: 95,
            spdefense: 80,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}