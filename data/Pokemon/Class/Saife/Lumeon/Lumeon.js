const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 900
        this.pokemon = 'Lumeon'
        this.region = Entidades.Region.Saife
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 26
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 75
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
            hp: 85,
            attack: 60,
            defense: 80,
            spattack: 90,
            spdefense: 70,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}