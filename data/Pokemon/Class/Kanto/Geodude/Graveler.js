const Base = require('./Geodude').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 75
        this.pokemon = 'Graveler'
        this.peso = 105
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Golem'),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('desenrollar'), 10],
            [move.get('magnitud'), 12],
            [move.get('lanzarrocas'), 16],
            [move.get('antiaéreo'), 18],
            [move.get('terratemblor'), 22],
            [move.get('pedrada'), 34],
            [move.get('terremoto'), 40],
            [move.get('doble filo'), 50],
            [move.get('roca afilada'), 54],
        ]
        this.stats = {
            hp: 55,
            attack: 95,
            defense: 115,
            spattack: 45,
            spdefense: 45,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}