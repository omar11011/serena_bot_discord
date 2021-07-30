const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 741
        this.spawn = false
        this.pokemon = 'Oricorio'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 3.4
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('picotazo'), 6],
            [move.get('aire afilado'), 13],
            [move.get('doble bofetón'), 23],
            [move.get('tajo aéreo'), 36],
            [move.get('danza despertar'), 40],
            [move.get('vendaval'), 50],
        ]
        this.stats = {
            hp: 75,
            attack: 70,
            defense: 70,
            spattack: 98,
            spdefense: 70,
            speed: 93,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}