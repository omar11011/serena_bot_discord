const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 424
        this.pokemon = 'Ambipom'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 20.3
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 45
        this.amistad = 100
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('impresionar'), 8],
            [move.get('golpes furia'), 18],
            [move.get('rapidez'), 22],
            [move.get('doble golpe'), 32],
            [move.get('lanzamiento'), 36],
            [move.get('última baza'), 43],
        ]
        this.stats = {
            hp: 75,
            attack: 100,
            defense: 66,
            spattack: 60,
            spdefense: 66,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}