const Base = require('./Dragonair').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 149
        this.pokemon = 'Dragonite'
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Volador,
        ]
        this.peso = 210
        this.altura = 2.2
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Dragonite', item.get('dragonitesita')),
        ]
        this.movimientos = [
            [move.get('constricción'), 1],
            [move.get('puño trueno'), 1],
            [move.get('puño fuego'), 1],
            [move.get('ciclón'), 11],
            [move.get('furia dragón'), 15],
            [move.get('atizar'), 21],
            [move.get('cola dragón'), 33],
            [move.get('acua cola'), 39],
            [move.get('carga dragón'), 47],
            [move.get('ataque ala'), 55],
            [move.get('enfado'), 67],
            [move.get('hiperrayo'), 75],
            [move.get('vendaval'), 81],
        ]
        this.stats = {
            hp: 91,
            attack: 134,
            defense: 95,
            spattack: 100,
            spdefense: 100,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}