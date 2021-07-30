const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 324
        this.pokemon = 'Torkoal'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 80.4
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 90
        this.amistad = 70
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('polución'), 4],
            [move.get('giro rápido'), 10],
            [move.get('giro fuego'), 13],
            [move.get('rueda fuego'), 18],
            [move.get('humareda'), 25],
            [move.get('golpe cuerpo'), 27],
            [move.get('lanzallamas'), 34],
            [move.get('azote'), 42],
            [move.get('onda ígnea'), 45],
            [move.get('infierno'), 50],
        ]
        this.stats = {
            hp: 70,
            attack: 85,
            defense: 140,
            spattack: 85,
            spdefense: 70,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}