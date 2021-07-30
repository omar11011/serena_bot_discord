const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 725
        this.pokemon = 'Litten'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 4.3
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Torracat', 17),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 1],
            [move.get('lengüetazo'), 8],
            [move.get('colmillo ígneo'), 14],
            [move.get('mordisco'), 22],
            [move.get('golpes furia'), 29],
            [move.get('golpe'), 32],
            [move.get('lanzallamas'), 36],
            [move.get('envite ígneo'), 43],
            [move.get('enfado'), 46],
        ]
        this.stats = {
            hp: 45,
            attack: 65,
            defense: 40,
            spattack: 60,
            spdefense: 40,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}