const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 399
        this.pokemon = 'Bidoof'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 20
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Bibarel', 15),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('desenrollar'), 13],
            [move.get('golpe cabeza'), 17],
            [move.get('hiper colmillo'), 21],
            [move.get('derribo'), 33],
            [move.get('super diente'), 37],
            [move.get('fuerza bruta'), 41],
        ]
        this.stats = {
            hp: 59,
            attack: 45,
            defense: 40,
            spattack: 35,
            spdefense: 40,
            speed: 31,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}