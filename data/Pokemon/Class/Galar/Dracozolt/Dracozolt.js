const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 880
        this.pokemon = 'Dracozolt'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 190
        this.altura = 1.8
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
            [move.get('impactrueno'), 1],
            [move.get('golpe aéreo'), 14],
            [move.get('poder pasado'), 21],
            [move.get('picoteo'), 28],
            [move.get('cola dragón'), 35],
            [move.get('pisotón'), 42],
            [move.get('atizar'), 49],
            [move.get('chispazo'), 56],
            [move.get('electropico'), 63],
            [move.get('pulso dragón'), 70],
            [move.get('carga dragón'), 77],
        ]
        this.stats = {
            hp: 90,
            attack: 100,
            defense: 90,
            spattack: 80,
            spdefense: 70,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}