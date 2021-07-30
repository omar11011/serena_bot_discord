const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 467
        this.pokemon = 'Magmortar'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 68
        this.altura = 1.6
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.75
        this.probHembra = 0.25
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 30
        this.amistad = 70
        this.movimientos = [
            [move.get('puño trueno'), 1],
            [move.get('polución'), 1],
            [move.get('ascuas'), 5],
            [move.get('finta'), 8],
            [move.get('giro fuego'), 12],
            [move.get('niebla clara'), 15],
            [move.get('pirotecnia'), 22],
            [move.get('puño fuego'), 29],
            [move.get('humareda'), 36],
            [move.get('lanzallamas'), 49],
            [move.get('llamarada'), 55],
            [move.get('hiperrayo'), 62],
        ]
        this.stats = {
            hp: 75,
            attack: 95,
            defense: 67,
            spattack: 125,
            spdefense: 95,
            speed: 83,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}