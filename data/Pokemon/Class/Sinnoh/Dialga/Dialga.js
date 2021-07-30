const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 483
        this.pokemon = 'Dialga'
        this.region = Entidades.Region.Sinnoh
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 683
        this.altura = 5.4
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('dragoaliento'), 1],
            [move.get('garra metal'), 6],
            [move.get('poder pasado'), 10],
            [move.get('cuchillada'), 15],
            [move.get('joya de luz'), 19],
            [move.get('represión metálica'), 24],
            [move.get('garra dragón'), 28],
            [move.get('tierra viva'), 33],
            [move.get('esfera aural'), 37],
            [move.get('cola férrea'), 42],
            [move.get('distorsión'), 46],
            [move.get('foco resplandor'), 50],
        ]
        this.stats = {
            hp: 100,
            attack: 120,
            defense: 120,
            spattack: 150,
            spdefense: 100,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}