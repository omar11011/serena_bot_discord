const Base = require('./Nidorino').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 34
        this.pokemon = 'Nidoking'
        this.peso = 62
        this.altura = 1.4
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Tierra,
        ]
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picotazo'), 1],
            [move.get('doble patada'), 1],
            [move.get('picotazo venenoso'), 1],
            [move.get('cornada'), 8],
            [move.get('doble patada'), 12],
            [move.get('guardia baja'), 23],
            [move.get('golpe'), 35],
            [move.get('tierra viva'), 43],
            [move.get('mega cuerno'), 58],
            [move.get('perforador'), 65],
        ]
        this.stats = {
            hp: 81,
            attack: 102,
            defense: 77,
            spattack: 85,
            spdefense: 75,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}