const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 27
        this.pokemon = 'Sandshrew'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 12
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Sandslash', 22),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('picotazo venenoso'), 5],
            [move.get('giro rápido'), 9],
            [move.get('corte furia'), 11],
            [move.get('magnitud'), 14],
            [move.get('rapidez'), 17],
            [move.get('golpes furia'), 20],
            [move.get('desenrollar'), 21],
            [move.get('bucle arena'), 23],
            [move.get('cuchillada'), 26],
            [move.get('excavar'), 30],
            [move.get('giro bola'), 34],
            [move.get('terremoto'), 46],
        ]
        this.stats = {
            hp: 50,
            attack: 75,
            defense: 80,
            spattack: 20,
            spdefense: 30,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}