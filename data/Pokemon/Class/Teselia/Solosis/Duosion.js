const Base = require('./Solosis').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 578
        this.pokemon = 'Duosion'
        this.peso = 8
        this.altura = 0.6
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Reuniclus', 41),
        ]
        this.captura = 100
        this.movimientos = [
            [move.get('psicoonda'), 1],
            [move.get('desenrollar'), 7],
            [move.get('poder oculto'), 14],
            [move.get('psicocarga'), 25],
            [move.get('esfuerzo'), 28],
            [move.get('premonición'), 31],
            [move.get('psíquico'), 39],
        ]
        this.stats = {
            hp: 65,
            attack: 40,
            defense: 50,
            spattack: 125,
            spdefense: 60,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}