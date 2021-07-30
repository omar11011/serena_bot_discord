const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 669
        this.pokemon = 'Flabebe'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 0.1
        this.altura = 0.1
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Floette', 19),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('látigo cepa'), 1],
            [move.get('viento feérico'), 6],
            [move.get('hoja afilada'), 15],
            [move.get('hoja mágica'), 22],
            [move.get('tormenta floral'), 28],
            [move.get('fuerza lunar'), 41],
            [move.get('danza pétalo'), 45],
            [move.get('rayo solar'), 48],
        ]
        this.stats = {
            hp: 44,
            attack: 38,
            defense: 39,
            spattack: 61,
            spdefense: 79,
            speed: 42,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}