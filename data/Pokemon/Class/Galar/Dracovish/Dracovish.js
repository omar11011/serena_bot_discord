const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 882
        this.pokemon = 'Dracovish'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 215
        this.altura = 2.3
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 1],
            [move.get('giro vil'), 14],
            [move.get('poder pasado'), 21],
            [move.get('mordisco'), 28],
            [move.get('dragoaliento'), 35],
            [move.get('pisotón'), 42],
            [move.get('super diente'), 49],
            [move.get('triturar'), 56],
            [move.get('branquibocado'), 63],
            [move.get('pulso dragón'), 70],
            [move.get('carga dragón'), 77],
        ]
        this.stats = {
            hp: 90,
            attack: 90,
            defense: 100,
            spattack: 70,
            spdefense: 80,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}