const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 897
        this.pokemon = 'Spectrier'
        this.region = Entidades.Region.Galar
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 44.5
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('doble patada'), 6],
            [move.get('infortunio'), 12],
            [move.get('pisotón'), 18],
            [move.get('bola sombra'), 36],
            [move.get('derribo'), 42],
            [move.get('golpe'), 54],
            [move.get('doble filo'), 66],
        ]
        this.stats = {
            hp: 100,
            attack: 65,
            defense: 60,
            spattack: 145,
            spdefense: 80,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}