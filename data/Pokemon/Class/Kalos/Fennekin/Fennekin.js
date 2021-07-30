const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 653
        this.pokemon = 'Fennekin'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 9.4
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Braixen', 16),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 5],
            [move.get('nitrocarga'), 14],
            [move.get('psicorrayo'), 17],
            [move.get('giro fuego'), 20],
            [move.get('psicocarga'), 31],
            [move.get('lanzallamas'), 35],
            [move.get('psíquico'), 41],
            [move.get('llamarada'), 48],
        ]
        this.stats = {
            hp: 40,
            attack: 45,
            defense: 40,
            spattack: 62,
            spdefense: 60,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}