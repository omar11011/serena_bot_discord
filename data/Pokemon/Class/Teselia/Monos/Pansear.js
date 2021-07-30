const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 513
        this.pokemon = 'Pansear'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 11
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Item('Simisear', item.get('piedra fuego')),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('lengüetazo'), 7],
            [move.get('calcinación'), 10],
            [move.get('golpes furia'), 13],
            [move.get('mordisco'), 19],
            [move.get('pirotecnia'), 22],
            [move.get('lanzamiento'), 28],
            [move.get('acróbata'), 31],
            [move.get('llamarada'), 34],
            [move.get('don natural'), 40],
            [move.get('triturar'), 43],
        ]
        this.stats = {
            hp: 50,
            attack: 53,
            defense: 48,
            spattack: 53,
            spdefense: 48,
            speed: 64,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}