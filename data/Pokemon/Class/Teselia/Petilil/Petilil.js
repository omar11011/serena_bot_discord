const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 548
        this.pokemon = 'Petilil'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 6.6
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Item('Lilligant', item.get('piedra solar')),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('megaagotar'), 13],
            [move.get('hoja mágica'), 19],
            [move.get('gigadrenado'), 26],
            [move.get('energibola'), 35],
            [move.get('lluevehojas'), 46],
        ]
        this.stats = {
            hp: 45,
            attack: 35,
            defense: 50,
            spattack: 70,
            spdefense: 50,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}