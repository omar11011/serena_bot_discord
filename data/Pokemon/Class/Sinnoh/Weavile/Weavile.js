const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 461
        this.pokemon = 'Weavile'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 34
        this.altura = 1.1
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('desquite'), 1],
            [move.get('buena baza'), 1],
            [move.get('arañazo'), 1],
            [move.get('ataque rápido'), 8],
            [move.get('finta'), 10],
            [move.get('viento hielo'), 14],
            [move.get('golpes furia'), 16],
            [move.get('garra metal'), 22],
            [move.get('lanzamiento'), 28],
            [move.get('tajo umbrío'), 35],
            [move.get('castigo'), 44],
            [move.get('pulso umbrío'), 47],
        ]
        this.stats = {
            hp: 70,
            attack: 120,
            defense: 65,
            spattack: 45,
            spdefense: 85,
            speed: 125,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}