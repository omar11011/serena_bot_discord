const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 113
        this.pokemon = 'Chansey'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 34.6
        this.altura = 1.1
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Amistad('Blissey')
        ]
        this.captura = 30
        this.amistad = 140
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('placaje'), 1],
            [move.get('doble bofetón'), 12],
            [move.get('golpes furia'), 16],
            [move.get('derribo'), 27],
            [move.get('mega puño'), 30],
            [move.get('lanzamiento'), 34],
            [move.get('bomba huevo'), 42],
            [move.get('doble filo'), 54],
            [move.get('mega patada'), 60],
        ]
        this.stats = {
            hp: 250,
            attack: 5,
            defense: 5,
            spattack: 35,
            spdefense: 105,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}