const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 466
        this.pokemon = 'Electivire'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 138.6
        this.altura = 1.8
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.75
        this.probHembra = 0.25
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 30
        this.amistad = 70
        this.movimientos = [
            [move.get('puño fuego'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('impactrueno'), 5],
            [move.get('patada baja'), 8],
            [move.get('rapidez'), 12],
            [move.get('onda voltio'), 15],
            [move.get('bola voltio'), 22],
            [move.get('puño trueno'), 29],
            [move.get('chispazo'), 36],
            [move.get('rayo'), 49],
            [move.get('trueno'), 55],
            [move.get('giga impacto'), 62],
        ]
        this.stats = {
            hp: 75,
            attack: 123,
            defense: 67,
            spattack: 95,
            spdefense: 85,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}