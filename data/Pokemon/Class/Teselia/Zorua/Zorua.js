const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 570
        this.pokemon = 'Zorua'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Siniestro,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 12.6
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Zoroark', 30),
        ]
        this.captura = 75
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('persecución'), 5],
            [move.get('golpes furia'), 13],
            [move.get('finta'), 17],
            [move.get('juego sucio'), 29],
            [move.get('castigo'), 45],
            [move.get('pulso noche'), 57],
        ]
        this.stats = {
            hp: 40,
            attack: 65,
            defense: 40,
            spattack: 80,
            spdefense: 40,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}