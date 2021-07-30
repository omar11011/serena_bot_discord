const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 862
        this.pokemon = 'Obstagoon'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 46
        this.altura = 1.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('sumisión'), 1],
            [move.get('pin misil'), 1],
            [move.get('placaje'), 1],
            [move.get('lengüetazo'), 1],
            [move.get('alarido'), 9],
            [move.get('golpe cabeza'), 12],
            [move.get('golpes furia'), 18],
            [move.get('derribo'), 28],
            [move.get('tajo umbrío'), 35],
            [move.get('contraataque'), 42],
            [move.get('tajo cruzado'), 50],
            [move.get('doble filo'), 56],
        ]
        this.stats = {
            hp: 93,
            attack: 90,
            defense: 101,
            spattack: 60,
            spdefense: 81,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}