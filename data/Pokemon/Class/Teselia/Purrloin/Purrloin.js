const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 509
        this.pokemon = 'Purrloin'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Siniestro,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 10.1
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Liepard', 20),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('golpes furia'), 12],
            [move.get('persecución'), 15],
            [move.get('sorpresa'), 21],
            [move.get('buena baza'), 28],
            [move.get('cuchillada'), 30],
            [move.get('tajo umbrío'), 37],
            [move.get('golpe bajo'), 46],
            [move.get('carantoña'), 49],
        ]
        this.stats = {
            hp: 41,
            attack: 50,
            defense: 37,
            spattack: 50,
            spdefense: 37,
            speed: 66,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}