const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 504
        this.pokemon = 'Patrat'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 11.6
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Watchog', 20),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('mordisco'), 6],
            [move.get('triturar'), 16],
            [move.get('super diente'), 21],
            [move.get('hiper colmillo'), 31],
            [move.get('atizar'), 41],
        ]
        this.stats = {
            hp: 45,
            attack: 55,
            defense: 39,
            spattack: 35,
            spdefense: 39,
            speed: 42,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}