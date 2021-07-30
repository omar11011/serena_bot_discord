const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 443
        this.pokemon = 'Gible'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 20.5
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Gabite', 24),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('furia dragón'), 7],
            [move.get('derribo'), 15],
            [move.get('bucle arena'), 19],
            [move.get('cuchillada'), 25],
            [move.get('garra dragón'), 27],
            [move.get('excavar'), 31],
            [move.get('carga dragón'), 37],
        ]
        this.stats = {
            hp: 58,
            attack: 70,
            defense: 45,
            spattack: 40,
            spdefense: 45,
            speed: 42,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}