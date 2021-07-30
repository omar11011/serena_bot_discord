const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 643
        this.pokemon = 'Reshiram'
        this.region = Entidades.Region.Teselia
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 330
        this.altura = 3.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 45
        this.amistad = 0
        this.movimientos = [
            [move.get('colmillo ígneo'), 1],
            [move.get('furia dragón'), 1],
            [move.get('poder pasado'), 15],
            [move.get('lanzallamas'), 22],
            [move.get('dragoaliento'), 29],
            [move.get('cuchillada'), 36],
            [move.get('paranormal'), 43],
            [move.get('llama fusión'), 50],
            [move.get('pulso dragón'), 54],
            [move.get('triturar'), 71],
            [move.get('llamarada'), 78],
            [move.get('enfado'), 85],
            [move.get('vozarrón'), 92],
            [move.get('llama azul'), 100],
        ]
        this.stats = {
            hp: 100,
            attack: 120,
            defense: 100,
            spattack: 150,
            spdefense: 120,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}