const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 644
        this.pokemon = 'Zekrom'
        this.region = Entidades.Region.Teselia
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 345
        this.altura = 2.9
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Zekrom', item.get('zekromita')),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('colmillo rayo'), 1],
            [move.get('furia dragón'), 1],
            [move.get('poder pasado'), 15],
            [move.get('rayo'), 22],
            [move.get('dragoaliento'), 29],
            [move.get('cuchillada'), 36],
            [move.get('cabezazo zen'), 43],
            [move.get('rayo fusión'), 50],
            [move.get('pulso dragón'), 54],
            [move.get('triturar'), 71],
            [move.get('trueno'), 78],
            [move.get('enfado'), 85],
            [move.get('vozarrón'), 92],
            [move.get('ataque fulgor'), 100],
        ]
        this.stats = {
            hp: 100,
            attack: 150,
            defense: 120,
            spattack: 120,
            spdefense: 100,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}