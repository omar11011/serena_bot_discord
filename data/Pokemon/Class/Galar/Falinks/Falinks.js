const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 870
        this.pokemon = 'Falinks'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 62
        this.altura = 3
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('golpe roca'), 5],
            [move.get('golpe cabeza'), 15],
            [move.get('inversión'), 30],
            [move.get('escaramuza'), 35],
            [move.get('a bocajarro'), 50],
            [move.get('mega cuerno'), 55],
            [move.get('contraataque'), 60],
        ]
        this.stats = {
            hp: 65,
            attack: 100,
            defense: 100,
            spattack: 70,
            spdefense: 60,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}