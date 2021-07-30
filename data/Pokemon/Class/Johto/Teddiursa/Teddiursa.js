const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 216
        this.pokemon = 'Teddiursa'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 8.8
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Ursaring', 30)
        ]
        this.captura = 120
        this.amistad = 70
        this.movimientos = [
            [move.get('antojo'), 1],
            [move.get('arañazo'), 1],
            [move.get('lengüetazo'), 1],
            [move.get('golpes furia'), 8],
            [move.get('finta'), 15],
            [move.get('cuchillada'), 29],
            [move.get('ronquido'), 43],
            [move.get('golpe'), 50],
            [move.get('lanzamiento'), 57],
        ]
        this.stats = {
            hp: 60,
            attack: 80,
            defense: 50,
            spattack: 50,
            spdefense: 50,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}