const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 881
        this.pokemon = 'Arctozolt'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Eléctrico,
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 150
        this.altura = 2.3
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
            [move.get('impactrueno'), 1],
            [move.get('eco voz'), 14],
            [move.get('poder pasado'), 21],
            [move.get('picoteo'), 28],
            [move.get('alud'), 35],
            [move.get('liofilización'), 42],
            [move.get('atizar'), 49],
            [move.get('chispazo'), 56],
            [move.get('electropico'), 63],
            [move.get('chuzos'), 70],
            [move.get('ventisca'), 77],
        ]
        this.stats = {
            hp: 90,
            attack: 100,
            defense: 90,
            spattack: 80,
            spdefense: 55,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}