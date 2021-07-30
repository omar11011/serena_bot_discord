const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 712
        this.pokemon = 'Bergmite'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 99.5
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Avalugg', 37),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('mordisco'), 1],
            [move.get('nieve polvo'), 5],
            [move.get('viento hielo'), 10],
            [move.get('derribo'), 15],
            [move.get('colmillo hielo'), 26],
            [move.get('bola hielo'), 30],
            [move.get('giro rápido'), 35],
            [move.get('alud'), 39],
            [move.get('ventisca'), 43],
            [move.get('doble filo'), 49],
        ]
        this.stats = {
            hp: 55,
            attack: 69,
            defense: 85,
            spattack: 32,
            spdefense: 35,
            speed: 28,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}