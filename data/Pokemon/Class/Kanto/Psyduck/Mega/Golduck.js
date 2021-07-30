const Base = require('../Golduck').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Golduck'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 85
        this.altura = 2
        this.evolucion = []
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
            [move.get('puño certero'), 55],
        ]
        this.stats = {
            hp: 90,
            attack: 110,
            defense: 90,
            spattack: 80,
            spdefense: 95,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}