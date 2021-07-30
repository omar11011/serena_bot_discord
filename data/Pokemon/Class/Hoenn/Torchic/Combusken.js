const Base = require('./Torchic').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 256
        this.pokemon = 'Combusken'
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 19.5
        this.altura = 0.9
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Blaziken', 36),
        ]
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 5],
            [move.get('picotazo'), 14],
            [move.get('doble patada'), 16],
            [move.get('nitrocarga'), 20],
            [move.get('ataque rápido'), 25],
            [move.get('cuchillada'), 42],
            [move.get('gancho alto'), 53],
            [move.get('envite ígneo'), 58],
        ]
        this.stats = {
            hp: 60,
            attack: 85,
            defense: 60,
            spattack: 85,
            spdefense: 60,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}