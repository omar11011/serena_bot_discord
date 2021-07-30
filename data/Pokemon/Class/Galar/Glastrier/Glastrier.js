const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 896
        this.pokemon = 'Glastrier'
        this.region = Entidades.Region.Galar
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 800
        this.altura = 2.2
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
            [move.get('placaje'), 1],
            [move.get('doble patada'), 6],
            [move.get('alud'), 12],
            [move.get('pisotón'), 18],
            [move.get('chuzos'), 36],
            [move.get('derribo'), 42],
            [move.get('golpe'), 54],
            [move.get('doble filo'), 66],
        ]
        this.stats = {
            hp: 100,
            attack: 145,
            defense: 130,
            spattack: 65,
            spdefense: 110,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}