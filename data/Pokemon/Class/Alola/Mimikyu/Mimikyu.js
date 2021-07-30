const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 778
        this.pokemon = 'Mimikyu'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Fantasma,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 0.7
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('impresionar'), 1],
            [move.get('sombra vil'), 14],
            [move.get('finta'), 23],
            [move.get('cuchillada'), 32],
            [move.get('garra umbría'), 37],
            [move.get('mazazo'), 40],
            [move.get('carantoña'), 46],
        ]
        this.stats = {
            hp: 55,
            attack: 90,
            defense: 80,
            spattack: 50,
            spdefense: 105,
            speed: 96,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}