const Base = require('./Timburr').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 533
        this.pokemon = 'Gurdurr'
        this.peso = 40
        this.altura = 1.2
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Conkeldurr'),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('patada baja'), 12],
            [move.get('lanzarrocas'), 16],
            [move.get('espabila'), 20],
            [move.get('guardia baja'), 24],
            [move.get('avalancha'), 33],
            [move.get('puño dinámico'), 37],
            [move.get('machada'), 45],
            [move.get('roca afilada'), 49],
            [move.get('puño certero'), 53],
            [move.get('fuerza bruta'), 57],
        ]
        this.stats = {
            hp: 85,
            attack: 105,
            defense: 85,
            spattack: 40,
            spdefense: 50,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}