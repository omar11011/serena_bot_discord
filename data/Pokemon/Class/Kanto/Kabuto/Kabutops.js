const Base = require('./Kabuto').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 141
        this.pokemon = 'Kabutops'
        this.peso = 40.5
        this.altura = 1.3
        this.evolucion = []
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('amago'), 1],
            [move.get('corte furia'), 1],
            [move.get('absorber'), 6],
            [move.get('disparo lodo'), 16],
            [move.get('acua jet'), 31],
            [move.get('megaagotar'), 36],
            [move.get('cuchillada'), 40],
            [move.get('poder pasado'), 46],
            [move.get('hidrobomba'), 49],
            [move.get('estrujón'), 50],
            [move.get('tajo umbrío'), 72],
        ]
        this.stats = {
            hp: 60,
            attack: 115,
            defense: 105,
            spattack: 65,
            spdefense: 70,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}