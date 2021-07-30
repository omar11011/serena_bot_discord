const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 764
        this.pokemon = 'Comfey'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 0.3
        this.altura = 0.1
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 60
        this.amistad = 50
        this.movimientos = [
            [move.get('látigo cepa'), 1],
            [move.get('beso drenaje'), 7],
            [move.get('hoja mágica'), 10],
            [move.get('constricción'), 16],
            [move.get('don natural'), 22],
            [move.get('tormenta floral'), 25],
            [move.get('hierba lazo'), 34],
            [move.get('danza pétalo'), 40],
            [move.get('carantoña'), 49],
        ]
        this.stats = {
            hp: 51,
            attack: 52,
            defense: 90,
            spattack: 82,
            spdefense: 110,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}