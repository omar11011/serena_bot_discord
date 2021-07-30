const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 837
        this.pokemon = 'Rolycoly'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 12
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Carkol', 18),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('giro rápido'), 5],
            [move.get('antiaéreo'), 10],
            [move.get('poder pasado'), 20],
            [move.get('calcinación'), 25],
            [move.get('golpe calor'), 35],
            [move.get('pedrada'), 40],
        ]
        this.stats = {
            hp: 30,
            attack: 40,
            defense: 50,
            spattack: 40,
            spdefense: 50,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}