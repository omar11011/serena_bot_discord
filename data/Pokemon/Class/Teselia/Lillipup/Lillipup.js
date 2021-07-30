const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 506
        this.pokemon = 'Lillipup'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 4.1
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Herdier', 16),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('mordisco'), 8],
            [move.get('derribo'), 15],
            [move.get('triturar'), 22],
            [move.get('represalia'), 29],
            [move.get('inversión'), 33],
            [move.get('última baza'), 36],
            [move.get('giga impacto'), 40],
            [move.get('carantoña'), 45],
        ]
        this.stats = {
            hp: 45,
            attack: 60,
            defense: 45,
            spattack: 25,
            spdefense: 45,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}