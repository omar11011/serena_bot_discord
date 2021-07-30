const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 538
        this.pokemon = 'Throh'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 55
        this.altura = 1.3
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('atadura'), 1],
            [move.get('tiro vital'), 17],
            [move.get('desquite'), 21],
            [move.get('llave corsé'), 25],
            [move.get('golpe cuerpo'), 29],
            [move.get('llave giro'), 37],
            [move.get('fuerza bruta'), 49],
            [move.get('inversión'), 53],
        ]
        this.stats = {
            hp: 120,
            attack: 100,
            defense: 85,
            spattack: 30,
            spdefense: 85,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}