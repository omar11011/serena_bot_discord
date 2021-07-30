const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 631
        this.pokemon = 'Heatmor'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 58
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 90
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('calcinación'), 1],
            [move.get('lengüetazo'), 1],
            [move.get('atadura'), 11],
            [move.get('giro fuego'), 16],
            [move.get('golpes furia'), 21],
            [move.get('pirotecnia'), 31],
            [move.get('picadura'), 36],
            [move.get('cuchillada'), 41],
            [move.get('látigo ígneo'), 44],
            [move.get('lanzallamas'), 50],
            [move.get('escupir'), 56],
            [move.get('envite ígneo'), 61],
            [move.get('infierno'), 66],
        ]
        this.stats = {
            hp: 85,
            attack: 97,
            defense: 66,
            spattack: 105,
            spdefense: 66,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}