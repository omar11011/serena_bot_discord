const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 218
        this.pokemon = 'Slugma'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 35
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Magcargo', 38)
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('polución'), 1],
            [move.get('ascuas'), 6],
            [move.get('lanzarrocas'), 8],
            [move.get('calcinación'), 15],
            [move.get('niebla clara'), 20],
            [move.get('poder pasado'), 22],
            [move.get('pirotecnia'), 27],
            [move.get('avalancha'), 29],
            [move.get('humareda'), 34],
            [move.get('golpe cuerpo'), 41],
            [move.get('lanzallamas'), 48],
            [move.get('tierra viva'), 50],
        ]
        this.stats = {
            hp: 40,
            attack: 40,
            defense: 40,
            spattack: 70,
            spdefense: 40,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}