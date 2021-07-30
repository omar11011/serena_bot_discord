const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 874
        this.pokemon = 'Stonjourner'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 520
        this.altura = 2.5
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 60
        this.amistad = 50
        this.movimientos = [
            [move.get('lanzarrocas'), 1],
            [move.get('tumba rocas'), 1],
            [move.get('pisotón'), 24],
            [move.get('avalancha'), 36],
            [move.get('golpe cuerpo'), 42],
            [move.get('cuerpo pesado'), 54],
            [move.get('roca afildad'), 60],
            [move.get('mega patada'), 66],
        ]
        this.stats = {
            hp: 100,
            attack: 125,
            defense: 135,
            spattack: 20,
            spdefense: 20,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}