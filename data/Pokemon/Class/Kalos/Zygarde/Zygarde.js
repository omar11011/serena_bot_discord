const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 718
        this.spawn = false
        this.pokemon = 'Zygarde'
        this.region = Entidades.Region.Kalos
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 305
        this.altura = 5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Zygarde Completo', null, 100),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('terratemblor'), 1],
            [move.get('dragoaliento'), 1],
            [move.get('mordisco'), 1],
            [move.get('excavar'), 10],
            [move.get('atadura'), 18],
            [move.get('fuerza telúrica'), 26],
            [move.get('triturar'), 51],
            [move.get('terremoto'), 55],
            [move.get('pulso dragón'), 66],
            [move.get('velocidad extrema'), 88],
            [move.get('enfado'), 93],
        ]
        this.stats = {
            hp: 108,
            attack: 100,
            defense: 121,
            spattack: 81,
            spdefense: 95,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}