const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 417
        this.pokemon = 'Pachirisu'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 3.9
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 200
        this.amistad = 100
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 5],
            [move.get('chispa'), 13],
            [move.get('moflete estático'), 19],
            [move.get('rapidez'), 21],
            [move.get('bola voltio'), 25],
            [move.get('super diente'), 37],
            [move.get('chispazo'), 41],
            [move.get('última baza'), 45],
            [move.get('hiper colmillo'), 49],
        ]
        this.stats = {
            hp: 60,
            attack: 45,
            defense: 70,
            spattack: 45,
            spdefense: 90,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}