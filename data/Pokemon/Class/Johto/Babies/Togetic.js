const Base = require('./Togepi').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 176
        this.pokemon = 'Togetic'
        this.tipo = [
            Entidades.Tipo.Hada,
            Entidades.Tipo.Volador,
        ]
        this.peso = 3.2
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
            Entidades.Huevo.Hada,
        ]
        this.evolucion = [
            new Entidades.Evolucion.Item('Togekiss', item.get('piedra día')),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('hoja mágica'), 1],
            [move.get('viento feérico'), 13],
            [move.get('poder pasado'), 33],
            [move.get('doble filo'), 45],
            [move.get('última baza'), 49],
        ]
        this.stats = {
            hp: 55,
            attack: 40,
            defense: 85,
            spattack: 80,
            spdefense: 105,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}