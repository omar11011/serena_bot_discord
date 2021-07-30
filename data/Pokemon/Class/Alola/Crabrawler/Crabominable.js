const Base = require('./Crabrawler').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 740
        this.pokemon = 'Crabominable'
        this.tipo = [
            Entidades.Tipo.Lucha,
            Entidades.Tipo.Hielo,
        ]
        this.peso = 180
        this.altura = 1.7
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('golpe roca'), 5],
            [move.get('persecución'), 13],
            [move.get('rayo burbuja'), 17],
            [move.get('puño incremento'), 22],
            [move.get('puño mareo'), 25],
            [move.get('puño hielo'), 25],
            [move.get('alud'), 29],
            [move.get('inversión'), 33],
            [move.get('martillazo'), 37],
            [move.get('puño dinámico'), 45],
            [move.get('a bocajarro'), 49],
        ]
        this.stats = {
            hp: 97,
            attack: 132,
            defense: 77,
            spattack: 62,
            spdefense: 67,
            speed: 43,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}