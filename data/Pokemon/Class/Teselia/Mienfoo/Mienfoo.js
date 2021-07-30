const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 619
        this.pokemon = 'Mienfoo'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 20
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Mienshao', 50),
        ]
        this.captura = 180
        this.amistad = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('sorpresa'), 13],
            [move.get('doble bofetón'), 17],
            [move.get('rapidez'), 21],
            [move.get('palmeo'), 29],
            [move.get('puño drenaje'), 33],
            [move.get('patada salto'), 37],
            [move.get('bote'), 49],
            [move.get('patada salto alta'), 50],
            [move.get('inversión'), 57],
            [move.get('esfera aural'), 61],
        ]
        this.stats = {
            hp: 45,
            attack: 85,
            defense: 50,
            spattack: 55,
            spdefense: 50,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}