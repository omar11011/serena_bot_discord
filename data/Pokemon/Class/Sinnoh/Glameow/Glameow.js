const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 431
        this.pokemon = 'Glameow'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 3.9
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Purugly', 38),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('sorpresa'), 1],
            [move.get('arañazo'), 5],
            [move.get('finta'), 17],
            [move.get('golpes furia'), 20],
            [move.get('cuchillada'), 37],
            [move.get('golpe bajo'), 41],
        ]
        this.stats = {
            hp: 49,
            attack: 55,
            defense: 42,
            spattack: 42,
            spdefense: 37,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}