const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 546
        this.pokemon = 'Cottonee'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 0.6
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Item('Whimsicott', item.get('piedra solar')),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('viento feérico'), 1],
            [move.get('absorber'), 1],
            [move.get('megaagotar'), 13],
            [move.get('hoja afilada'), 19],
            [move.get('gigadrenado'), 26],
            [move.get('energibola'), 35],
            [move.get('esfuerzo'), 44],
            [move.get('rayo solar'), 46],
        ]
        this.stats = {
            hp: 40,
            attack: 27,
            defense: 60,
            spattack: 37,
            spdefense: 50,
            speed: 66,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}