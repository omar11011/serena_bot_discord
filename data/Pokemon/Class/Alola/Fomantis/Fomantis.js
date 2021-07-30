const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 753
        this.pokemon = 'Fomantis'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 1.5
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Lurantis', 34),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('corte furia'), 1],
            [move.get('follaje'), 5],
            [move.get('hoja afilada'), 10],
            [move.get('hoja aguda'), 23],
            [move.get('cuchillada'), 32],
            [move.get('rayo solar'), 41],
        ]
        this.stats = {
            hp: 40,
            attack: 55,
            defense: 35,
            spattack: 50,
            spdefense: 35,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}