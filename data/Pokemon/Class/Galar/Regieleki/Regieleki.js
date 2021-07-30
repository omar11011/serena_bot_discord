const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 894
        this.pokemon = 'Regieleki'
        this.region = Entidades.Region.Galar
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 145
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('impactrueno'), 1],
            [move.get('giro rápido'), 1],
            [move.get('electrotela'), 6],
            [move.get('poder pasado'), 12],
            [move.get('onda voltio'), 18],
            [move.get('velocidad extrema'), 30],
            [move.get('electrojaula'), 36],
            [move.get('rayo'), 42],
            [move.get('golpe'), 54],
            [move.get('electrocañón'), 66],
            [move.get('hiperrayo'), 72],
        ]
        this.stats = {
            hp: 80,
            attack: 100,
            defense: 50,
            spattack: 100,
            spdefense: 50,
            speed: 200,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}