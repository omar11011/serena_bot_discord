const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 829
        this.pokemon = 'Gossifleur'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 2.2
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Eldegoss', 20),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('follaje'), 1],
            [move.get('giro rápido'), 4],
            [move.get('hoja afilada'), 12],
            [move.get('canon'), 16],
            [move.get('ciclón de hojas'), 21],
            [move.get('vozarrón'), 28],
            [move.get('lluevehojas'), 36],
        ]
        this.stats = {
            hp: 40,
            attack: 40,
            defense: 60,
            spattack: 40,
            spdefense: 60,
            speed: 10,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}