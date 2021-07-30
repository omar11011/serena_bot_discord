const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 875
        this.pokemon = 'Eiscue'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 89
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 60
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('nieve polvo'), 1],
            [move.get('meteorobola'), 12],
            [move.get('viento hielo'), 18],
            [move.get('golpe cabeza'), 24],
            [move.get('liofilización'), 36],
            [move.get('surf'), 54],
            [move.get('ventisca'), 60],
        ]
        this.stats = {
            hp: 75,
            attack: 80,
            defense: 110,
            spattack: 65,
            spdefense: 90,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}