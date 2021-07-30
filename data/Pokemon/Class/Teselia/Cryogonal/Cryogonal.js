const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 615
        this.pokemon = 'Cryogonal'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 148
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 25
        this.amistad = 70
        this.movimientos = [
            [move.get('atadura'), 1],
            [move.get('canto helado'), 5],
            [move.get('giro rápido'), 13],
            [move.get('viento hielo'), 17],
            [move.get('rayo aurora'), 25],
            [move.get('rayo hielo'), 33],
            [move.get('cuchillada'), 41],
            [move.get('liofilización'), 50],
            [move.get('rayo solar'), 53],
            [move.get('tajo umbrío'), 57],
            [move.get('frío polar'), 61],
        ]
        this.stats = {
            hp: 80,
            attack: 50,
            defense: 50,
            spattack: 95,
            spdefense: 135,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}