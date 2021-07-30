const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 863
        this.pokemon = 'Perrserker'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 28
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 90
        this.amistad = 50
        this.movimientos = [
            [move.get('sorpresa'), 1],
            [move.get('arañazo'), 1],
            [move.get('día de pago'), 12],
            [move.get('garra metal'), 16],
            [move.get('cabeza de hierro'), 28],
            [move.get('golpes furia'), 31],
            [move.get('cuchillada'), 42],
            [move.get('golpe'), 54],
            [move.get('represión metálica'), 60],
        ]
        this.stats = {
            hp: 70,
            attack: 110,
            defense: 100,
            spattack: 50,
            spdefense: 60,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}