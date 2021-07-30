const Base = require('./Phanpy').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 232
        this.pokemon = 'Donphan'
        this.peso = 120
        this.altura = 1.1
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Donphan', item.get('donphanita')),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('cornada'), 1],
            [move.get('giro rápido'), 6],
            [move.get('desenrollar'), 10],
            [move.get('buena baza'), 15],
            [move.get('atizar'), 24],
            [move.get('magnitud'), 30],
            [move.get('terremoto'), 43],
            [move.get('giga impacto'), 50],
        ]
        this.stats = {
            hp: 90,
            attack: 120,
            defense: 120,
            spattack: 60,
            spdefense: 60,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}