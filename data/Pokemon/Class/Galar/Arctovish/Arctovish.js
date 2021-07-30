const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 883
        this.pokemon = 'Arctovish'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 175
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('pistola agua'), 1],
            [move.get('viento hielo'), 14],
            [move.get('poder pasado'), 21],
            [move.get('mordisco'), 28],
            [move.get('liofilización'), 42],
            [move.get('super diente'), 49],
            [move.get('triturar'), 56],
            [move.get('branquibocado'), 63],
            [move.get('chuzos'), 70],
            [move.get('ventisca'), 77],
        ]
        this.stats = {
            hp: 90,
            attack: 90,
            defense: 100,
            spattack: 80,
            spdefense: 90,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}