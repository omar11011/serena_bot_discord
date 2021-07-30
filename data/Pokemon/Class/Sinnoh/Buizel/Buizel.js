const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 418
        this.pokemon = 'Buizel'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 29.5
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Floatzel', 22),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('bomba sónica'), 1],
            [move.get('ataque rápido'), 11],
            [move.get('pistola agua'), 15],
            [move.get('persecución'), 18],
            [move.get('rapidez'), 21],
            [move.get('acua jet'), 24],
            [move.get('doble golpe'), 27],
            [move.get('torbellino'), 31],
            [move.get('viento cortante'), 35],
            [move.get('acua cola'), 38],
            [move.get('hidrobomba'), 45],
        ]
        this.stats = {
            hp: 55,
            attack: 65,
            defense: 35,
            spattack: 60,
            spdefense: 30,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}