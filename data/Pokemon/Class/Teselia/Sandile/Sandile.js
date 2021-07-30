const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 551
        this.pokemon = 'Sandile'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Siniestro,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 15.2
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Krokorok', 29),
        ]
        this.captura = 180
        this.amistad = 50
        this.movimientos = [
            [move.get('furia'), 1],
            [move.get('mordisco'), 4],
            [move.get('bucle arena'), 13],
            [move.get('buena baza'), 16],
            [move.get('bofetón lodo'), 19],
            [move.get('triturar'), 28],
            [move.get('excavar'), 31],
            [move.get('juego sucio'), 37],
            [move.get('terremoto'), 43],
            [move.get('golpe'), 46],
        ]
        this.stats = {
            hp: 50,
            attack: 72,
            defense: 35,
            spattack: 35,
            spdefense: 35,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}