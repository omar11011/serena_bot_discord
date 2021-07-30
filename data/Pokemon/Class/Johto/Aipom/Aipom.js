const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 190
        this.pokemon = 'Aipom'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 11.5
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Movimiento('Ambipom', move.get('doble golpe'))
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('impresionar'), 8],
            [move.get('golpes furia'), 18],
            [move.get('rapidez'), 22],
            [move.get('doble golpe'), 32],
            [move.get('lanzamiento'), 36],
            [move.get('última baza'), 43],
        ]
        this.stats = {
            hp: 55,
            attack: 70,
            defense: 55,
            spattack: 40,
            spdefense: 55,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}