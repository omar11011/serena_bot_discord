const Base = require('./Bunnelby').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 660
        this.pokemon = 'Diggersby'
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Tierra,
        ]
        this.peso = 42.4
        this.altura = 1
        this.evolucion = []
        this.captura = 127
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('terratemblor'), 1],
            [move.get('ataque rápido'), 7],
            [move.get('doble bofetón'), 10],
            [move.get('bofetón lodo'), 13],
            [move.get('derribo'), 15],
            [move.get('disparo lodo'), 18],
            [move.get('doble patada'), 21],
            [move.get('azote'), 32],
            [move.get('excavar'), 37],
            [move.get('bote'), 43],
            [move.get('super diente'), 48],
            [move.get('imagen'), 54],
            [move.get('terremoto'), 57],
            [move.get('machada'), 60],
        ]
        this.stats = {
            hp: 85,
            attack: 56,
            defense: 77,
            spattack: 50,
            spdefense: 77,
            speed: 78,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}