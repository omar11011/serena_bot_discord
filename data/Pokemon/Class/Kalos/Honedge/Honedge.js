const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 679
        this.pokemon = 'Honedge'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 2
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Doublade', 35),
        ]
        this.captura = 180
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('corte furia'), 5],
            [move.get('persecución'), 13],
            [move.get('sombra vil'), 20],
            [move.get('golpe aéreo'), 22],
            [move.get('represalia'), 26],
            [move.get('cuchillada'), 29],
            [move.get('tajo umbrío'), 35],
            [move.get('cabeza de hierro'), 42],
            [move.get('espada santa'), 47],
        ]
        this.stats = {
            hp: 45,
            attack: 80,
            defense: 100,
            spattack: 35,
            spdefense: 37,
            speed: 28,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}