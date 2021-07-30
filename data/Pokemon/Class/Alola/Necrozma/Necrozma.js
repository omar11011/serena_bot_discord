const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 800
        this.pokemon = 'Necrozma'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.UltraEnte
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 230
        this.altura = 2.4
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Necrozma Melena Crepuscular', item.get('necrosol')),
            new Entidades.Evolucion.Temporal('Necrozma Alas del Alba', item.get('necroluna')),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('rayo carga'), 1],
            [move.get('disparo espejo'), 1],
            [move.get('garra metal'), 1],
            [move.get('cuchillada'), 1],
            [move.get('poder reserva'), 13],
            [move.get('pedrada'), 19],
            [move.get('tajo umbrío'), 23],
            [move.get('psicocorte'), 37],
            [move.get('joya de luz'), 43],
        ]
        this.stats = {
            hp: 97,
            attack: 107,
            defense: 101,
            spattack: 127,
            spdefense: 89,
            speed: 79,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}