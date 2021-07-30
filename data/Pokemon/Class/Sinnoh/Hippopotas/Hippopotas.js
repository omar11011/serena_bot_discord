const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 449
        this.pokemon = 'Hippopotas'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 49.5
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Hippowdon', 34),
        ]
        this.captura = 140
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('mordisco'), 7],
            [move.get('derribo'), 19],
            [move.get('excavar'), 19],
            [move.get('bucle arena'), 25],
            [move.get('triturar'), 31],
            [move.get('terremoto'), 37],
            [move.get('doble filo'), 44],
            [move.get('fisura'), 50],
        ]
        this.stats = {
            hp: 68,
            attack: 72,
            defense: 78,
            spattack: 38,
            spdefense: 42,
            speed: 32,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}