const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 529
        this.pokemon = 'Drilbur'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 8.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Excadrill', 31),
        ]
        this.captura = 120
        this.amistad = 70
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('giro rápido'), 5],
            [move.get('bofetón lodo'), 8],
            [move.get('golpes furia'), 12],
            [move.get('garra metal'), 15],
            [move.get('excavar'), 19],
            [move.get('cuchillada'), 26],
            [move.get('avalancha'), 29],
            [move.get('terremoto'), 33],
            [move.get('taladradora'), 43],
            [move.get('fisura'), 47],
        ]
        this.stats = {
            hp: 60,
            attack: 85,
            defense: 40,
            spattack: 30,
            spdefense: 45,
            speed: 68,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}