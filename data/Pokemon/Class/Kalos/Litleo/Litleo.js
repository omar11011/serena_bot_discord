const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 667
        this.pokemon = 'Litleo'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 13.5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.125
        this.probHembra = 0.875
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Pyroar', 35),
        ]
        this.captura = 220
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 5],
            [move.get('golpe cabeza'), 11],
            [move.get('derribo'), 20],
            [move.get('colmillo ígneo'), 23],
            [move.get('esfuerzo'), 28],
            [move.get('eco voz'), 33],
            [move.get('lanzallamas'), 36],
            [move.get('triturar'), 39],
            [move.get('vozarrón'), 43],
            [move.get('calcinación'), 46],
            [move.get('sofoco'), 50],
        ]
        this.stats = {
            hp: 62,
            attack: 50,
            defense: 58,
            spattack: 73,
            spdefense: 54,
            speed: 72,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}