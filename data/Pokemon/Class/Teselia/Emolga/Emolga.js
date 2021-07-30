const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 587
        this.pokemon = 'Emolga'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 200
        this.amistad = 50
        this.movimientos = [
            [move.get('impactrueno'), 1],
            [move.get('ataque rápido'), 4],
            [move.get('chispa'), 13],
            [move.get('moflete estático'), 15],
            [move.get('persecución'), 16],
            [move.get('onda voltio'), 22],
            [move.get('acróbata'), 30],
            [move.get('voltiocambio'), 42],
            [move.get('chispazo'), 50],
        ]
        this.stats = {
            hp: 55,
            attack: 75,
            defense: 60,
            spattack: 75,
            spdefense: 60,
            speed: 103,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}