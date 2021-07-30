const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 390
        this.pokemon = 'Chimchar'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 6.2
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Monferno', 14),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 7],
            [move.get('golpes furia'), 15],
            [move.get('rueda fuego'), 17],
            [move.get('imagen'), 31],
            [move.get('giro fuego'), 33],
            [move.get('acróbata'), 39],
            [move.get('lanzallamas'), 47],
        ]
        this.stats = {
            hp: 44,
            attack: 58,
            defense: 44,
            spattack: 58,
            spdefense: 44,
            speed: 61,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}