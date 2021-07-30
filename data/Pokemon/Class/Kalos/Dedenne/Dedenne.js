const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 702
        this.pokemon = 'Dedenne'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 2.2
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 180
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('impactrueno'), 7],
            [move.get('carga parábola'), 17],
            [move.get('moflete estático'), 20],
            [move.get('voltiocambio'), 26],
            [move.get('ronquido'), 31],
            [move.get('rayo carga'), 34],
            [move.get('carantoña'), 42],
            [move.get('trueno'), 45],
            [move.get('chispazo'), 50],
        ]
        this.stats = {
            hp: 57,
            attack: 58,
            defense: 57,
            spattack: 81,
            spdefense: 67,
            speed: 101,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}