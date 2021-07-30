const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 338
        this.pokemon = 'Solrock'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 154
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('envite ígneo'), 1],
            [move.get('confusión'), 1],
            [move.get('lanzarrocas'), 1],
            [move.get('giro fuego'), 1],
            [move.get('psicoonda'), 13],
            [move.get('avalancha'), 21],
            [move.get('psíquico'), 29],
            [move.get('roca afilada'), 37],
            [move.get('rayo solar'), 41],
        ]
        this.stats = {
            hp: 90,
            attack: 95,
            defense: 85,
            spattack: 55,
            spdefense: 60,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}