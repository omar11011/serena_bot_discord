const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 498
        this.pokemon = 'Tepig'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 9.9
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Pignite', 17),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 7],
            [move.get('nitrocarga'), 15],
            [move.get('polución'), 19],
            [move.get('desenrollar'), 21],
            [move.get('derribo'), 25],
            [move.get('golpe calor'), 27],
            [move.get('buena baza'), 31],
            [move.get('lanzallamas'), 33],
            [move.get('testarazo'), 37],
            [move.get('envite ígneo'), 43],
        ]
        this.stats = {
            hp: 65,
            attack: 63,
            defense: 45,
            spattack: 45,
            spdefense: 45,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}