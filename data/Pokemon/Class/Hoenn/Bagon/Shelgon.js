const Base = require('./Bagon').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 372
        this.pokemon = 'Shelgon'
        this.tipo = [
            Entidades.Tipo.Dragón,
        ]
        this.peso = 110
        this.altura = 1.1
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Salamence', 50),
        ]
        this.movimientos = [
            [move.get('furia'), 1],
            [move.get('ascuas'), 4],
            [move.get('mordisco'), 10],
            [move.get('dragoaliento'), 13],
            [move.get('golpe cabeza'), 17],
            [move.get('triturar'), 25],
            [move.get('garra dragón'), 29],
            [move.get('cabezazo zen'), 35],
            [move.get('lanzallamas'), 49],
            [move.get('doble filo'), 56],
        ]
        this.stats = {
            hp: 65,
            attack: 95,
            defense: 100,
            spattack: 60,
            spdefense: 50,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}