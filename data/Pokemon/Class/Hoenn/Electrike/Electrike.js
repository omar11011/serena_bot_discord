const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 309
        this.pokemon = 'Electrike'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 15.2
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Manectric', 26),
        ]
        this.captura = 120
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 10],
            [move.get('chispa'), 13],
            [move.get('colmillo rayo'), 19],
            [move.get('mordisco'), 24],
            [move.get('chispazo'), 29],
            [move.get('voltio cruel'), 39],
            [move.get('trueno'), 49],
        ]
        this.stats = {
            hp: 40,
            attack: 45,
            defense: 40,
            spattack: 65,
            spdefense: 40,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}