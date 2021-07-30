const Base = require('./Flyvee').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 910
        this.pokemon = 'Skyroar'
        this.tipo = [
            Entidades.Tipo.Volador,
            Entidades.Tipo.Hada,
            Entidades.Tipo.Hielo,
        ]
        this.peso = 1.8
        this.altura = 80
        this.probMacho = 1
        this.probHembra = 0
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('acróbata'), 1],
            [move.get('viento feérico'), 6],
            [move.get('nieve polvo'), 12],
            [move.get('caída libre'), 18],
            [move.get('colmillo hielo'), 24],
            [move.get('tajo aéreo'), 30],
            [move.get('vuelo'), 36],
            [move.get('chuzos'), 42],
            [move.get('carantoña'), 48],
            [move.get('vendaval'), 54],
        ]
        this.stats = {
            hp: 100,
            attack: 120,
            defense: 80,
            spattack: 100,
            spdefense: 90,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}