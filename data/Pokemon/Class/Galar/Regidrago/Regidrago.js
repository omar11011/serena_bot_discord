const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 895
        this.pokemon = 'Regidrago'
        this.region = Entidades.Region.Galar
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 200
        this.altura = 2.1
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('ciclón'), 1],
            [move.get('agarre'), 1],
            [move.get('mordisco'), 6],
            [move.get('poder pasado'), 12],
            [move.get('dragoaliento'), 18],
            [move.get('triturar'), 30],
            [move.get('garra dragón'), 36],
            [move.get('machada'), 42],
            [move.get('golpe'), 54],
            [move.get('draco energía'), 66],
            [move.get('hiperrayo'), 72],
        ]
        this.stats = {
            hp: 200,
            attack: 100,
            defense: 50,
            spattack: 100,
            spdefense: 50,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}