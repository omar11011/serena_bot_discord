const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 688
        this.pokemon = 'Binacle'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 31
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Barbaracle', 39),
        ]
        this.captura = 120
        this.amistad = 50
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('pistola agua'), 4],
            [move.get('golpes furia'), 10],
            [move.get('cuchillada'), 13],
            [move.get('bofetón lodo'), 18],
            [move.get('tenaza'), 20],
            [move.get('poder pasado'), 28],
            [move.get('corte furia'), 37],
            [move.get('tajo umbrío'), 41],
            [move.get('concha filo'), 45],
            [move.get('tajo cruzado'), 49],
        ]
        this.stats = {
            hp: 42,
            attack: 52,
            defense: 67,
            spattack: 39,
            spdefense: 56,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}