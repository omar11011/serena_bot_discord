const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 209
        this.pokemon = 'Snubbull'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 7.8
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Granbull', 23)
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('mordisco'), 7],
            [move.get('lengüetazo'), 13],
            [move.get('golpe cabeza'), 19],
            [move.get('furia'), 31],
            [move.get('derribo'), 37],
            [move.get('carantoña'), 37],
            [move.get('vendetta'), 43],
            [move.get('triturar'), 49],
        ]
        this.stats = {
            hp: 60,
            attack: 80,
            defense: 50,
            spattack: 40,
            spdefense: 40,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}