const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 621
        this.pokemon = 'Druddigon'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 139
        this.altura = 1.6
        this.grupoHuevo = [
            Entidades.Huevo.Dragón,
            Entidades.Huevo.Monstruo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('mordisco'), 9],
            [move.get('furia dragón'), 18],
            [move.get('cuchillada'), 21],
            [move.get('triturar'), 25],
            [move.get('garra dragón'), 27],
            [move.get('guardia baja'), 31],
            [move.get('desquite'), 35],
            [move.get('tajo umbrío'), 40],
            [move.get('cola dragón'), 45],
            [move.get('treparrocas'), 49],
            [move.get('fuerza bruta'), 55],
            [move.get('enfado'), 62],
        ]
        this.stats = {
            hp: 77,
            attack: 120,
            defense: 90,
            spattack: 60,
            spdefense: 90,
            speed: 48,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}