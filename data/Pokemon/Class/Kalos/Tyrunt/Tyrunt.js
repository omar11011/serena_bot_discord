const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 696
        this.pokemon = 'Tyrunt'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 26
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Tyrantrum', 39),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pisotón'), 10],
            [move.get('mordisco'), 17],
            [move.get('poder pasado'), 26],
            [move.get('cola dragón'), 30],
            [move.get('triturar'), 34],
            [move.get('garra dragón'), 37],
            [move.get('golpe'), 40],
            [move.get('terremoto'), 44],
            [move.get('perforador'), 49],
        ]
        this.stats = {
            hp: 58,
            attack: 89,
            defense: 77,
            spattack: 45,
            spdefense: 45,
            speed: 48,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}