const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 468
        this.pokemon = 'Togekiss'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Hada,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 38
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Togekiss', item.get('togekissita')),
            new Entidades.Evolucion.Gigamax('Togekiss Gigamax'),
        ]
        this.captura = 30
        this.amistad = 50
        this.movimientos = [
            [move.get('tajo aéreo'), 1],
            [move.get('velocidad extrema'), 1],
            [move.get('esfera aural'), 1],
            [move.get('ataque aéreo'), 1],
        ]
        this.stats = {
            hp: 85,
            attack: 50,
            defense: 95,
            spattack: 120,
            spdefense: 115,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}