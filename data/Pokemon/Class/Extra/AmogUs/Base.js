const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = '???'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 92
        this.altura = 3.6
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.captura = 100
        this.amistad = 90
        this.movimientos = [
            [move.get('cuchillada'), 1],
            [move.get('mega puño'), 1],
        ]
        this.stats = {
            hp: 50,
            attack: 100,
            defense: 30,
            spattack: 100,
            spdefense: 30,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}