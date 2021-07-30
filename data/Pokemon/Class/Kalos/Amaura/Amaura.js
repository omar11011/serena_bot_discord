const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 698
        this.pokemon = 'Amaura'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 25.2
        this.altura = 1.3
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Aurorus', 39),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('lanzarrocas'), 10],
            [move.get('viento hielo'), 13],
            [move.get('derribo'), 15],
            [move.get('rayo aurora'), 20],
            [move.get('poder pasado'), 26],
            [move.get('canon'), 30],
            [move.get('alud'), 34],
            [move.get('rayo hielo'), 50],
            [move.get('hiperrayo'), 57],
            [move.get('ventisca'), 65],
        ]
        this.stats = {
            hp: 77,
            attack: 59,
            defense: 50,
            spattack: 67,
            spdefense: 63,
            speed: 46,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}