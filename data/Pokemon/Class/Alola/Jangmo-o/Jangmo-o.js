const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 782
        this.pokemon = 'Jangmo-o'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 29.7
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Hakamo-o', 35),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('cola dragón'), 17],
            [move.get('golpe cabeza'), 25],
            [move.get('garra dragón'), 41],
            [move.get('enfado'), 53],
        ]
        this.stats = {
            hp: 45,
            attack: 55,
            defense: 65,
            spattack: 45,
            spdefense: 45,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}