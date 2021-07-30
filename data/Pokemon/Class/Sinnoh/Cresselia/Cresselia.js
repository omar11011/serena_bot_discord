const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 488
        this.pokemon = 'Cresselia'
        this.region = Entidades.Region.Sinnoh
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 85.6
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 3
        this.amistad = 100
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('rayo aurora'), 29],
            [move.get('premonición'), 38],
            [move.get('cuchillada'), 47],
            [move.get('psicocorte'), 66],
            [move.get('rayo hielo'), 70],
            [move.get('hiperrayo'), 70],
            [move.get('psíquico'), 93],
            [move.get('fuerza lunar'), 99],
        ]
        this.stats = {
            hp: 120,
            attack: 70,
            defense: 120,
            spattack: 75,
            spdefense: 130,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}