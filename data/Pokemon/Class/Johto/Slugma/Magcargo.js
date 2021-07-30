const Base = require('./Slugma').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 219
        this.pokemon = 'Magcargo'
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Roca,
        ]
        this.peso = 55
        this.altura = 0.8
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('polución'), 1],
            [move.get('ascuas'), 6],
            [move.get('lanzarrocas'), 8],
            [move.get('calcinación'), 15],
            [move.get('niebla clara'), 20],
            [move.get('poder pasado'), 22],
            [move.get('pirotecnia'), 27],
            [move.get('avalancha'), 29],
            [move.get('humareda'), 34],
            [move.get('golpe cuerpo'), 43],
            [move.get('lanzallamas'), 54],
            [move.get('tierra viva'), 58],
        ]
        this.stats = {
            hp: 60,
            attack: 50,
            defense: 120,
            spattack: 90,
            spdefense: 80,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}