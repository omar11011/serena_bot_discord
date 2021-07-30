const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 474
        this.pokemon = 'Porygon-Z'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 34
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 30
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('psicorrayo'), 7],
            [move.get('doble rayo'), 29],
            [move.get('chispazo'), 40],
            [move.get('triataque'), 50],
            [move.get('electrocañón'), 62],
            [move.get('hiperrayo'), 67],
        ]
        this.stats = {
            hp: 85,
            attack: 80,
            defense: 70,
            spattack: 135,
            spdefense: 75,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}