const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 646
        this.pokemon = 'Kyurem'
        this.region = Entidades.Region.Teselia
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 325
        this.altura = 3
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Kyurem Blanco', item.get('dna reshiram')),
            new Entidades.Evolucion.Temporal('Kyurem Negro', item.get('dna zekrom')),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('colmillo rayo'), 1],
            [move.get('furia dragón'), 1],
            [move.get('poder pasado'), 15],
            [move.get('rayo hielo'), 22],
            [move.get('dragoaliento'), 29],
            [move.get('cuchillada'), 36],
            [move.get('chuzos'), 43],
            [move.get('mundo gélido'), 50],
            [move.get('pulso dragón'), 57],
            [move.get('esfuerzo'), 71],
            [move.get('ventisca'), 78],
            [move.get('enfado'), 85],
            [move.get('vozarrón'), 92],
        ]
        this.stats = {
            hp: 125,
            attack: 130,
            defense: 90,
            spattack: 130,
            spdefense: 90,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}