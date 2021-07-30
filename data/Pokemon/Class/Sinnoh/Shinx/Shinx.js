const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 403
        this.pokemon = 'Shinx'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 9.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Luxio', 15),
        ]
        this.captura = 235
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('chispa'), 13],
            [move.get('mordisco'), 17],
            [move.get('colmillo rayo'), 29],
            [move.get('triturar'), 33],
            [move.get('chispazo'), 41],
            [move.get('voltio cruel'), 45],
        ]
        this.stats = {
            hp: 45,
            attack: 65,
            defense: 34,
            spattack: 40,
            spdefense: 34,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}