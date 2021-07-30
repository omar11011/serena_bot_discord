const Base = require('./Popplio').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 729
        this.pokemon = 'Brionne'
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.peso = 17.5
        this.altura = 0.6
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Primarina', 34),
        ]
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('pistola agua'), 1],
            [move.get('voz cautivadora'), 8],
            [move.get('acua jet'), 14],
            [move.get('viento hielo'), 16],
            [move.get('rayo burbuja'), 24],
            [move.get('doble bofetón'), 33],
            [move.get('vozarrón'), 37],
            [move.get('fuerza lunar'), 42],
            [move.get('hidrobomba'), 51],
        ]
        this.stats = {
            hp: 60,
            attack: 69,
            defense: 69,
            spattack: 91,
            spdefense: 81,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}