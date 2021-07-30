const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 694
        this.pokemon = 'Helioptile'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 6
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Item('Heliolisk', item.get('piedra solar')),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('impactrueno'), 6],
            [move.get('bofetón lodo'), 13],
            [move.get('ataque rápido'), 17],
            [move.get('viento cortante'), 22],
            [move.get('carga parábola'), 25],
            [move.get('terratemblor'), 35],
            [move.get('voltiocambio'), 40],
            [move.get('rayo'), 49],
        ]
        this.stats = {
            hp: 44,
            attack: 38,
            defense: 33,
            spattack: 61,
            spdefense: 43,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}