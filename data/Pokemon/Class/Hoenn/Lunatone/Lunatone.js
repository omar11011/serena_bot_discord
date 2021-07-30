const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 337
        this.pokemon = 'Lunatone'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 168
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('joya de luz'), 1],
            [move.get('psicocarga'), 1],
            [move.get('confusión'), 1],
            [move.get('lanzarrocas'), 1],
            [move.get('psicoonda'), 13],
            [move.get('avalancha'), 21],
            [move.get('psíquico'), 29],
            [move.get('roca afilada'), 37],
            [move.get('premonición'), 41],
            [move.get('fuerza lunar'), 50],
        ]
        this.stats = {
            hp: 90,
            attack: 55,
            defense: 65,
            spattack: 95,
            spdefense: 85,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}