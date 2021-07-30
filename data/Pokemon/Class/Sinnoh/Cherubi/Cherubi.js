const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 420
        this.pokemon = 'Cherubi'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 3.3
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Cherrim', 25),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('hoja mágica'), 19],
            [move.get('derribo'), 31],
            [move.get('rayo solar'), 37],
            [move.get('tormenta solar'), 47],
        ]
        this.stats = {
            hp: 45,
            attack: 35,
            defense: 45,
            spattack: 62,
            spdefense: 53,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}